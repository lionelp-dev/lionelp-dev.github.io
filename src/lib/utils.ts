type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flatMap((input) => {
      if (!input) {
        return [];
      }

      if (typeof input === "string" || typeof input === "number") {
        return [String(input)];
      }

      if (Array.isArray(input)) {
        return [cn(...input)];
      }

      return Object.entries(input)
        .filter(([, enabled]) => enabled)
        .map(([className]) => className);
    })
    .filter(Boolean)
    .join(" ");
}
