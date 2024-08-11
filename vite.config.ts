/// <reference types="vitest" />

import { resolve } from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteMockServe } from "vite-plugin-mock"
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("src")
    }
  },
  plugins: [vue(), viteMockServe()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: '@import "@/styles/theme.scss";'
      },
      less: {
        additionalData: '@import "@/styles/theme.less";'
      }
    }
  },
  test: {
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 使用 happy-dom 模拟 DOM
    // 这需要你安装 happy-dom 作为对等依赖（peer dependency）
    environment: "happy-dom",
    coverage: {
      all: true, // 是否对所有文件生成覆盖率报告，即使没有被测试
      enabled: true,
      include: ["src/**/*.{vue,ts}"], // 包含哪些文件或路径进行覆盖率统计
      exclude: [
        "*.config.{ts,js}",
        "**/*.d.ts",
        "src/typing",
        "src/App.vue",
        "src/main.ts"
      ],
      provider: "v8", // 使用 v8 作为覆盖率提供者 or istanbul
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage", // 报告的输出目录
      thresholds: {
        // 设置覆盖率阈值，未达到阈值将导致测试失败
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80
      },
      clean: true, // 是否在每次测试前清理覆盖率目录
      skipFull: false // 是否跳过已完全覆盖的文件
    }
  }
})
