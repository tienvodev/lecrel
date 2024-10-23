import localFont from "next/font/local";

export const brandTypeface = localFont({
  src: [
    {
      path: "./PlaywriteGBS-VariableFont_wght.ttf",
    },
    {
      path: "./PlaywriteGBS-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--typeface-brand",
});
