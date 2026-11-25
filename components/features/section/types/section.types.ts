export interface ISectionState {
  title: string;
  headline: string;
  description: string;
  hasDivider: boolean;
  variantId: string;
  isDark?: boolean;
}

export interface ISectionAction {
  updateTitle: (title: string) => void;
  setIsDark: (value: boolean) => void;
}

export type ISectionStore = ISectionState & ISectionAction;
