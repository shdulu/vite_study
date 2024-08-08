import { defineConfig } from "vite"
import { resolve } from "path"
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
        additionalData: '@import "@/styles/theme.scss";'
      },
      less: {
        additionalData: '@import "@/styles/theme.less";'
      }
    }
  }
})
