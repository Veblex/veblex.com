// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  fonts: [
      {
          provider: fontProviders.local(),
          name: "Geist",
          cssVariable: "--font-geist",
          options: {
              variants: [
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Black.woff2",
                      ],
                      weight: "900",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-BlackItalic.woff2",
                      ],
                      weight: "900",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-ExtraBold.woff2",
                      ],
                      weight: "800",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-ExtraBoldItalic.woff2",
                      ],
                      weight: "800",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Bold.woff2",
                      ],
                      weight: "700",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-BoldItalic.woff2",
                      ],
                      weight: "700",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-SemiBold.woff2",
                      ],
                      weight: "600",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-SemiBoldItalic.woff2",
                      ],
                      weight: "600",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Medium.woff2",
                      ],
                      weight: "500",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-MediumItalic.woff2",
                      ],
                      weight: "500",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Regular.woff2",
                      ],
                      weight: "400",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Italic.woff2",
                      ],
                      weight: "400",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Light.woff2",
                      ],
                      weight: "300",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-LightItalic.woff2",
                      ],
                      weight: "300",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-ExtraLight.woff2",
                      ],
                      weight: "200",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-ExtraLightItalic.woff2",
                      ],
                      weight: "200",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-Thin.woff2",
                      ],
                      weight: "100",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist/Geist-ThinItalic.woff2",
                      ],
                      weight: "100",
                      style: "italic",
                  },
              ],
          },
      },
      {
          provider: fontProviders.local(),
          name: "GeistMono",
          cssVariable: "--font-geist-mono",
          options: {
              variants: [
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Black.woff2",
                      ],
                      weight: "900",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-BlackItalic.woff2",
                      ],
                      weight: "900",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-ExtraBold.woff2",
                      ],
                      weight: "800",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-ExtraBoldItalic.woff2",
                      ],
                      weight: "800",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Bold.woff2",
                      ],
                      weight: "700",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-BoldItalic.woff2",
                      ],
                      weight: "700",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-SemiBold.woff2",
                      ],
                      weight: "600",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-SemiBoldItalic.woff2",
                      ],
                      weight: "600",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Medium.woff2",
                      ],
                      weight: "500",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-MediumItalic.woff2",
                      ],
                      weight: "500",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Regular.woff2",
                      ],
                      weight: "400",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Italic.woff2",
                      ],
                      weight: "400",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Light.woff2",
                      ],
                      weight: "300",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-LightItalic.woff2",
                      ],
                      weight: "300",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-ExtraLight.woff2",
                      ],
                      weight: "200",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-ExtraLightItalic.woff2",
                      ],
                      weight: "200",
                      style: "italic",
                  },

                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-Thin.woff2",
                      ],
                      weight: "100",
                      style: "normal",
                  },
                  {
                      src: [
                          "./src/assets/fonts/geist-mono/GeistMono-ThinItalic.woff2",
                      ],
                      weight: "100",
                      style: "italic",
                  },
              ],
          },
      },
  ],

  integrations: [mdx()],
});