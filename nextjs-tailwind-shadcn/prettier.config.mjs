const config = {
  // 使用 prettier-plugin-tailwindcss 插件, 用于给 tailwind 的类名排序
  plugins: ["prettier-plugin-tailwindcss"],
  // 指定 tailwind.config.js 文件路径
  tailwindConfig: "./tailwind.config.js",
  // 对 cn 函数中的类名进行排序
  tailwindFunctions: ["cn"],
  // 保留重复的类名, true 为保留, default: false
  tailwindPreserveDuplicates: false,
  // 自动移除 tailwind 的类名中的空格, false 为移除, default: false
  tailwindPreserveWhitespace: false,
  singleQuote: true,
};

export default config;
