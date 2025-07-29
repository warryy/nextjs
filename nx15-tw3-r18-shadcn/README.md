# nextjs15-tw3-react18-shadcn

## 初始化项目

- `npx create-next-app@latest`

```
✔ What is your project named? … nextjs15-tw3-react18-shadcn
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
✔ What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/warryy/code/nextjs/test/nextjs15-tw3-react18-shadcn.
```

- React 版本写死:

打开 `package.json`

```
"dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    ...
}

"devDependencies": {
    ...
    "@types/react": "18.2.0",
    "@types/react-dom": "18.2.0",
    ...
}
```

## 安装 tailwindcss

- `pnpm add  -D tailwindcss@3`
- `npx tailwindcss init`
- 配置 `tailwind.config.js`

```
// ...
content: ["./src/**/*.{html,tsx,ts}"],
// ...
```

- 添加 css 指令到全局 css  
  global.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

// ...
```

- **重点重点重点**: 修改 postcss.config.js 配置
  将项目生成的 postcss.config.mjs 文件删除, sb 东西有问题(貌似 next.js 15+ 会有这个问题, 其余版本不清楚)
  自建 postcss.config.js 文件, 填写以下内容
  tailwind 相关文档: https://v3.tailwindcss.com/docs/using-with-preprocessors

```
module.exports = {
  plugins: {
    tailwindcss: {},
    // 自动添加浏览器前缀
    autoprefixer: {},
  },
};
```

安装 `autoprefixer`: `pnpm add autoprefixer`
删除 `@tailwindcss/postcss`: `pnpm remove @tailwindcss/postcss`

- 测试是否成功
  src/app/page.tsx

```
export default function Home() {
  return (
    <div className="bg-slate-700 p-4 text-3xl font-bold underline">
      Hello Tailwind CSS
    </div>
  );
}

```

## 安装 shadcn-ui

直接用一个模板试试, 先把 globals.css 文件内容清空, 并找地方保存一下
运行: `npx shadcn@latest add sidebar-11`
一路回车
将保存的旧 globals.css 文件内容粘贴回原文件

## 进阶

### 配置 vscode 的 prettier

安装插件: https://open-vsx.org/extension/esbenp/prettier-vscode
项目安装 prettier 以及 tailwindcss 插件

```
pnpm add -D prettier prettier-plugin-tailwindcss
```

项目根目录新建: prettier.config.mjs

> 用 .mjs 做文件后缀, 项目导出用 export default xxx 这种 esm 的导出方式
> 明确用 .mjs 后缀, vscode 可以更好的知道如何引入配置, 而不会识别不到

```
const config = {
  // 使用 prettier-plugin-tailwindcss 插件, 用于给 tailwind 的类名排序
  plugins: ['prettier-plugin-tailwindcss'],
  // 指定 tailwind.config.js 文件路径
  tailwindConfig: './tailwind.config.js',
  // 对 cn 函数中的类名进行排序
  tailwindFunctions: ['cn'],
  // 保留重复的类名, true 为保留, default: false
  tailwindPreserveDuplicates: false,
  // 自动移除 tailwind 的类名中的空格, false 为移除, default: false
  tailwindPreserveWhitespace: false,
}
export default config
```
