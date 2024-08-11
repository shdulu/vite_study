import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import HomePage from "@/pages/HomePage.vue"
import HelloWorld from "@/components/HelloWorld.vue"
import { createPinia, setActivePinia } from "pinia"

describe("HomePage.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // 创建并激活 Pinia 实例
  })
  it("render the Home Page title", () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [createPinia()] // 将 Pinia 作为插件传递
      }
    })
    // 使用 data-testid 来查找元素
    const title = wrapper.find('[data-testid="home-ttile"]')
    // 验证标题文本是否正确
    expect(title.text()).toBe("Home Page")
  })
  it("renders HelloWorld component with correct props", () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [createPinia()]
      }
    })
    // 查找HelloWorld组件
    const helloWorldComponent = wrapper.findComponent(HelloWorld)
    // 验证 HelloWorld 组件是否存在
    expect(helloWorldComponent.exists()).toBe(true)
    // 验证 HelloWorld 组件的 props 是否正确
    expect(helloWorldComponent.props("msg")).toBe("測試 message")
  })
})
