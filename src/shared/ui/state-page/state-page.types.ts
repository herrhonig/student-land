export type StateVariant = "empty" | "error" | "loading";

export type StateSize = "page" | "block";

export type StatePageProps = Partial<{
  variant: StateVariant;
  size: StateSize;
  title: string;
  description: string;
  actionText: string;
  onAction: () => void;
}>;

export type VariantMapType = Record<
  StateVariant,
  { title: string; description: string }
>;
