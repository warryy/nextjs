import { Edu_NSW_ACT_Foundation, Readex_Pro, Lusitana } from "next/font/google";

export const readexPro = Readex_Pro({
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

/**
 * what: 这是另外一种引用字体的方式示例, 通过 variable 属性来引用字体
 * why: 当页面中需要使用多种字体时, 通过 variable 属性来引用字体
 * how:
 * 1. 在 globals.css 中, 通过 @font-face 来引用字体
 * 2. 或者在 tailwind.config.js 中, 通过 fontFamily 来设置
 *
 */
export const eduNswActFoundation = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  variable: "--font-edu-nsw-act-foundation",
});
