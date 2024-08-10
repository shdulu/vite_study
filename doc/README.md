1. 为什么 vite 本地运行会比较快？

node_modules\.vite\deps 缓存依赖的资源包，已经构建好的，本地服务运行的时候不需要再去打包，而是直接去这个目录下找对应的资源文件直接拿来用

2. vite 怎么做到热更新的
   websocket

3. vite 天然支持引入 `.ts` 文件, vite 仅执行 `.ts` 文件的转译工作，并不执行任何类型检查. `vue-tsc` 可以对 Vue3 进行 `Typescript` 类型校验，`build: "vue-tsc --noEmit && vite build"` -> `--noEmit 仅检查不编译`

4. `eslint --ext .ts,.tsx,vue src/** --no-error-on-unmatched-pattern --quiet`

   - `--quiet`
   - `--ext` 扩展名
   - `--fix` 自动修复

5. ESLinteslint 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具

   - 代码质量问题：使用方式有可能有问题
   - 代码风格问题：风格不符合一定规则

| 名称                             | 说明                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------- |
| eslint                           | 一个用于识别和报告在 ECMAScript/JavaScript 代码中发现的模式的工具               |
| eslint-plugin-vue                | Vue 的官方 ESLint 插件                                                          |
| @typescript-eslint/parser        | 一个 ESLint 解析器，它利用 TypeScript-ESTree 允许 ESLint 检查 TypeScript 源代码 |
| @typescript-eslint/eslint-plugin | 一个 ESLint 插件，为 TypeScript 代码库提供 lint 规则                            |
| @vue/eslint-config-typescript    | Vue 的 eslint-config-typescript                                                 |

6. Prettier

- ESLint 主要解决的是代码质量问题
- [代码质量规则](https://eslint.bootcss.com/docs/rules/)
  - no-unused-vars 禁止出现未使用过的变量
  - no-implicit-globals 禁止在全局范围内使用变量声明和 function 声明
  - prefer-promise-reject-errors 要求使用 Error 对象作为 Promise 拒绝的原因
- [prettier](https://prettier.io) 主要解决的是代码风格问题
  - max-len 最大长度
  - no-mixed-spaces-and-tabs 不允许空格和 tab 混合
  - keyword-spacing 关键字的空
  - comma-style 冒号风格

| 名称                        | 说明                            |
| --------------------------- | ------------------------------- |
| prettier                    | 代码格式化                      |
| eslint-plugin-prettier      | 作为 ESLint 规则运行得 prettier |
| @vue/eslint-config-prettier | Vue 的 eslint-config-prettier   |

7. editorconfig

   - editorconfig帮助开发人员在不同的编辑器和 IDE 之间定义和维护一致的编码样式
   - 不同的开发人员，不同的编辑器，有不同的编码风格，而 EditorConfig 就是用来协同团队开发人员之间的代码的风格及样式规范化的一个工具，而.editorconfig 正是它的默认配置文件
   - EditorConfig
   - vscode 这类编辑器，需要自行安装 editorconfig 插件

8. git hooks

- 可以在 `git commit` 之前检查代码，保证所有提交到版本库中的代码都是符合规范的
- 可以在 `git push` 之前执行单元测试,保证所有的提交的代码经过的单元测试
- [husky](https://typicode.github.io/husky/) 可以让我们向项目中方便添加git hooks,它会自动在仓库中的 .git/ 目录下增加相应的钩子,比如 pre-commit 钩子就会在你执行 git commit命令的时候的触发
- [lint-staged](https://www.npmjs.com/package/lint-staged) 用于实现每次提交只检查本次提交所修改的文件
- `mrm` 可以根据 `package.json` 依赖项中的代码质量工具来安装和配置 husky 和 lint-staged
- Commitlint 可以规范 `git commit -m` ""中的描述信息
