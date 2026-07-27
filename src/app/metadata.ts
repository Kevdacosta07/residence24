import type { Metadata } from "next";
import { toCdnAsset } from "@/lib/cdn";

const title = "Residence24 | Intendance privée et gestion de résidence à Genève";
const description = "Intendance privée à Genève pour villa, appartement ou résidence secondaire : passages, home sitting, coordination des prestataires, animaux et préparation de votre retour.";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://residence24.ch"),
  title: { default: title, template: "%s | Residence24" },
  description,
  applicationName: "Residence24",
  category: "Intendance privée",
  keywords: [
    "intendance privée Genève",
    "conciergerie privée Genève",
    "conciergerie de luxe Genève",
    "gestion résidence Genève",
    "gestion résidence secondaire Genève",
    "intendance villa Genève",
    "gestion villa Genève",
    "gestion maison Genève",
    "gestion propriété Genève",
    "service intendance Genève",
    "home sitting Genève",
    "house sitting Genève",
    "présence domicile Genève",
    "qui s'occupe de ma maison pendant mon absence Genève",
    "surveillance maison absence Genève",
    "préparer résidence secondaire avant retour Genève",
    "coordination artisans Genève",
    "villa Genève",
  ],
  authors: [{ name: "Residence24", url: "https://residence24.ch" }],
  creator: "Residence24",
  publisher: "Residence24",
  alternates: { canonical: "/", languages: { "fr-CH": "/" } },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: "/",
    siteName: "Residence24",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Residence24, intendance privée à Genève" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: toCdnAsset("/icon.svg"),
    apple: toCdnAsset("/app-icon.svg"),
    shortcut: toCdnAsset("/icon.svg"),
  },
  manifest: "/manifest.webmanifest",
};
