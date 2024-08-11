// in cypress/support/index.ts
import { devServer } from "@cypress/vite-dev-server"
import coverage from "@cypress/code-coverage/task"
import viteConfig from "../../vite.config"

export const setupNodeEvents = async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  coverage(on, config)

  on("dev-server:start", (options: Cypress.DevServerConfig) => {
    return devServer({
      ...options,
      viteConfig: {
        ...viteConfig,
        define: {
          "process.env": process.env
        }
      }
    })
  })
  return config
}
