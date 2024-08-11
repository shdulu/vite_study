import "./commands"
import "@cypress/code-coverage/support"

// 在测试失败时截取屏幕截图
Cypress.on("fail", (error, runnable) => {
  const screenshotFileName = `${runnable.parent?.title} -- ${runnable.title} (failed).png`
  cy.screenshot(screenshotFileName)
  throw error // 继续抛出错误
})
