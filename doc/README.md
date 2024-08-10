### vite

- `Vite` 主要有两部分组成
  - 一个开发服务器，基于原生模块 提供了丰富的内建功能，如速度快到惊人的 模块热更新（HMR）,Vite 将会使用 [esbuild](https://esbuild.github.io) 预构建依赖。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍
  - 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源

#### vite 思考

1. 为什么 `vite` 本地运行会比较快？

   `node_modules\.vite\deps` 缓存依赖的资源包，已经构建好的，本地服务运行的时候不需要再去打包，而是直接去这个目录下找对应的资源文件直接拿来用

2. `vite` 怎么做到热更新的

   通过 `websocket`， TODO:补充说明

#### vite 支持typescript

1. `vite` 天然支持引入 `.ts` 文件,

   vite 仅执行 `.ts` 文件的转译工作，并不执行任何类型检查.
   `vue-tsc` 可以对 Vue3 进行 `Typescript` 类型校验，`build: "vue-tsc --noEmit && vite build"` -> `--noEmit 仅检查不编译`

2. `eslint --ext .ts,.tsx,vue src/** --no-error-on-unmatched-pattern --quiet`

   - `--quiet`
   - `--ext` 扩展名
   - `--fix` 自动修复

3. `ESLinteslint` 是一个插件化并且可配置的 JavaScript 语法规则和代码风格的检查工具

   - 代码质量问题：使用方式有可能有问题
   - 代码风格问题：风格不符合一定规则

| 名称                             | 说明                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------- |
| eslint                           | 一个用于识别和报告在 ECMAScript/JavaScript 代码中发现的模式的工具               |
| eslint-plugin-vue                | Vue 的官方 ESLint 插件                                                          |
| @typescript-eslint/parser        | 一个 ESLint 解析器，它利用 TypeScript-ESTree 允许 ESLint 检查 TypeScript 源代码 |
| @typescript-eslint/eslint-plugin | 一个 ESLint 插件，为 TypeScript 代码库提供 lint 规则                            |
| @vue/eslint-config-typescript    | Vue 的 eslint-config-typescript                                                 |

1. Prettier

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

#### 8. git hooks

- 可以在 `git commit` 之前检查代码，保证所有提交到版本库中的代码都是符合规范的
- 可以在 `git push` 之前执行单元测试,保证所有的提交的代码经过的单元测试
- [husky](https://typicode.github.io/husky/) 可以让我们向项目中方便添加git hooks,它会自动在仓库中的 .git/ 目录下增加相应的钩子,比如 pre-commit 钩子就会在你执行 git commit命令的时候的触发
- [lint-staged](https://www.npmjs.com/package/lint-staged) 用于实现每次提交只检查本次提交所修改的文件
- `mrm` 可以根据 `package.json` 依赖项中的代码质量工具来安装和配置 husky 和 lint-staged
- Commitlint 可以规范 `git commit -m` ""中的描述信息

##### 8.1 lint-staged

mrm安装lint-staged的同时会安装husky

```js
pnpm install mrm -D
npx mrm lint-staged
```

##### 8.2 commitlint

- commitlint推荐我们使用onfig-conventional配置去写 commit
- 提交格式 `git commit -m <type>[optional scope]: <description>`

  - `type` ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
  - `optional scope`：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块
  - `description`：一句话描述此次提交的主要内容，做到言简意赅

  **type 类型**
    <table>
    <thead>
    <tr>
    <th style="text-align:left">类型</th>
    <th style="text-align:left">描述</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td style="text-align:left">build</td>
    <td style="text-align:left">编译相关的修改，例如发布版本、对项目构建或者依赖的改动</td>
    </tr>
    <tr>
    <td style="text-align:left">chore</td>
    <td style="text-align:left">其他修改, 比如改变构建流程、或者增加依赖库、工具等</td>
    </tr>
    <tr>
    <td style="text-align:left">ci</td>
    <td style="text-align:left">持续集成修改</td>
    </tr>
    <tr>
    <td style="text-align:left">docs</td>
    <td style="text-align:left">文档修改</td>
    </tr>
    <tr>
    <td style="text-align:left">feature</td>
    <td style="text-align:left">新特性、新功能</td>
    </tr>
    <tr>
    <td style="text-align:left">fix</td>
    <td style="text-align:left">修改 bug</td>
    </tr>
    <tr>
    <td style="text-align:left">perf</td>
    <td style="text-align:left">优化相关，比如提升性能、体验</td>
    </tr>
    <tr>
    <td style="text-align:left">refactor</td>
    <td style="text-align:left">代码重构</td>
    </tr>
    <tr>
    <td style="text-align:left">revert</td>
    <td style="text-align:left">回滚到上一个版本</td>
    </tr>
    <tr>
    <td style="text-align:left">style</td>
    <td style="text-align:left">代码格式修改</td>
    </tr>
    <tr>
    <td style="text-align:left">test</td>
    <td style="text-align:left">测试用例修改</td>
    </tr>
    </tbody>
    </table>

**8.2.2 安装**

`pnpm install @commitlint/cli @commitlint/config-conventional -D`

**8.2.3 配置**

`npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"`
