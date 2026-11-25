interface IAssetWithType {
  type: string;
  isFeatured?: boolean;
}

export function getDefaultImage<T extends IAssetWithType>(
  assets?: readonly T[],
): (T & { type: "image" }) | undefined {
  const imageAssets = assets?.filter(
    (asset): asset is T & { type: "image" } => asset.type === "image",
  );

  return (
    imageAssets?.find((asset) => asset.isFeatured) ?? imageAssets?.[0]
  );
}
