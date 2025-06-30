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
