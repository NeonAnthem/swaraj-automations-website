/**
 * Cache lifetime, per environment.
 *
 * Sanity webhooks can only be delivered to a public domain, so in development
 * nothing ever calls `revalidateTag`. A `cacheLife("hours")` entry would then
 * hold stale CMS content for hours with no way to drop it — and the `max`
 * profiles used by services and regions would effectively never refresh at all,
 * since the webhook is their ONLY invalidation path. Collapsing every profile to
 * `seconds` locally means a Sanity edit shows up on the next refresh.
 *
 * Production keeps whatever the call site asked for: there the webhook is wired,
 * so long lifetimes are correct and tag invalidation does the real work.
 *
 * WHY THE SWITCH: `cacheLife` is declared as one overload per literal profile
 * name, and TypeScript will not resolve a union-typed argument against them —
 * `cacheLife(someProfileVariable)` fails to compile. So every call below passes
 * a literal, and exactly one of them runs per invocation, which is also what
 * `cacheLife` requires.
 *
 * `NODE_ENV` is inlined by the bundler, so the branch is a compile-time constant
 * and is safe inside a `use cache` scope.
 */
import { cacheLife } from "next/cache";
import { isDevelopment } from "./get-environment";

/** The preset `cacheLife` profiles. */
export type CacheProfile =
  | "seconds"
  | "minutes"
  | "hours"
  | "days"
  | "weeks"
  | "max";

/**
 * Set the cache lifetime for the enclosing `use cache` scope: the requested
 * profile in production, always `seconds` in development.
 *
 * Drop-in for `cacheLife`, and reads the same at the call site:
 *   cacheLifeFor("hours")
 */
/**
 * The development lifetime: revalidate about once a second, never expire.
 *
 * Deliberately NOT the `seconds` preset, and deliberately not `stale: 0`.
 * Either one makes a cached value unprerenderable, and under Cache Components
 * every `use cache` read reachable outside a `<Suspense>` boundary then starts
 * reporting "Uncached data was accessed outside of `<Suspense>`"
 * (nextjs.org/docs/messages/blocking-route) — the route stops going into the
 * static shell entirely. `stale` therefore matches the presets' 5 minutes; it
 * only governs the CLIENT router's copy on soft navigation, and a page reload
 * bypasses it, so CMS edits still show up on refresh.
 *
 * `revalidate: 1` is what actually does the work: the server refetches a second
 * after the last read. `expire` is a year out so an idle entry never forces a
 * blocking miss.
 */
const DEV_CACHE_LIFE = {
  stale: 5 * 60,
  revalidate: 1,
  expire: 60 * 60 * 24 * 365,
} as const;

export function cacheLifeFor(profile: CacheProfile): void {
  if (isDevelopment()) {
    cacheLife(DEV_CACHE_LIFE);
    return;
  }

  switch (profile) {
    case "seconds":
      return cacheLife("seconds");
    case "minutes":
      return cacheLife("minutes");
    case "hours":
      return cacheLife("hours");
    case "days":
      return cacheLife("days");
    case "weeks":
      return cacheLife("weeks");
    case "max":
      return cacheLife("max");
  }
}
