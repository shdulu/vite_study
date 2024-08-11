import { defineConfig } from "cypress"
import { setupNodeEvents } from "./cypress/plugins"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Vite 默认开发服务器地址
    supportFile: "cypress/support/index.ts", // 支持文件的路径，可以设置为 false 来禁用
    fixturesFolder: "cypress/fixtures", // 放置测试数据的文件夹
    specPattern: "test/e2e/**/*.cy.{js,jsx,ts,tsx}", // 测试文件的匹配模式
    screenshotsFolder: "cypress/screenshots", // 截图保存路径
    excludeSpecPattern: ["*.{ts,tsx,js,jsx}"],
    videosFolder: "cypress/videos", // 测试视频保存路径
    defaultCommandTimeout: 30000, // 默认的命令超时时间，单位为毫秒
    requestTimeout: 30000,
    viewportWidth: 1440, // 设置默认视口宽度
    viewportHeight: 990, // 设置默认视口高度
    retries: {
      // 配置重试策略
      runMode: 2, // 在命令行运行模式下的重试次数
      openMode: 0 // 在 Cypress GUI 打开模式下的重试次数
    },
    setupNodeEvents
  }
})
