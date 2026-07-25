export const imageKitPublicBase = "https://ik.imagekit.io/qzijbd3zm/residence24/public";

export function toCdnAsset(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${imageKitPublicBase}${normalizedPath}`;
}