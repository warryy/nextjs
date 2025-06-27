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