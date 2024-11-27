import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lecrel | A Platform for Novel Lovers to Read, Write, and Collaborate",
  description:
    "Lecrel is a creative platform for novel lovers to read, write, and collaborate. Discover and publish stories, leave interactive reviews, and connect with freelance illustrators, translators, and voice-over artists.",
  keywords:
    "novels, storytelling, read, write, creative writing, authors, readers, interactive reviews, freelance illustrators, freelance translators, voice-over artists, fiction platform, collaboration",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
