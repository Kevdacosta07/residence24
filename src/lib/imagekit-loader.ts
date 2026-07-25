"use client";

import { imageKitPublicBase } from "./cdn";

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageKitLoader({ src, width, quality }: ImageLoaderProps) {
  if (/^https?:\/\//i.test(src)) {
    return src;
  }

  const normalizedPath = src.startsWith("/") ? src : `/${src}`;
  const params = new URLSearchParams({
    tr: `w-${width},q-${quality ?? 75}`,
  });

  return `${imageKitPublicBase}${normalizedPath}?${params.toString()}`;
}