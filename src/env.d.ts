/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

// TODO: 搞懂这个文件的作用
// Vite 默认的类型是写给它的 Node js API 的， 要将其补充到一个Vite 应用的客户端代码环境中
// 如果你的库依赖于某个全局库
// 使用/// 指令
// 三斜线指令仅可放在包含它的文件的最顶端
// 三斜线引用告诉编译器在编译过程中要引入的额外的文件
