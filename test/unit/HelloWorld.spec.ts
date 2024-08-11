import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"
import HelloWorld from "@/components/HelloWorld.vue"
import { createTestingPinia } from "@pinia/testing"
import { useMainStore } from "@/store"
import { nextTick } from "vue"

describe("HelloWorld.vue", () => {
  // 基础渲染测试: 检查是否正确渲染了 msg 属性和 logo 图片
  it("renders the message", () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: "Hello Vitest"
      },
      global: {
        plugins: [createTestingPinia()]
      }
    })

    expect(wrapper.find("h1").text()).toBe("Hello Vitest")
  })

  it("renders the logo image", () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [createTestingPinia()]
      }
    })

    expect(wrapper.find("img").attributes("src")).toBeDefined()
  })

  // 局部状态测试: 点击第一个按钮时，局部状态 count 是否增加。
  it("increments the local count when button is clicked", async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [createTestingPinia()]
      }
    })

    const button = wrapper.find('button[type="button"]')
    expect(button.text()).toContain("count is: 0")

    await button.trigger("click")
    expect(button.text()).toContain("count is: 1")
  })

  // Pinia Store 状态测试:
  // 测试 mainStore.count++ 按钮是否正确更新 mainStore.count。
  it("updates store count when mainStore.count++ button is clicked", async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              mainStore: { count: 0, name: "Test Name" }
            }
          })
        ]
      }
    })

    const button = wrapper.findAll("button")[1] // 第二个 button 是 mainStore.count++ 的按钮
    const countParagraph = wrapper.findAll("p")[1] // 第二个 p 标签显示的是 mainStore.count

    expect(countParagraph.text()).toBe("count:0")

    await button.trigger("click")
    expect(countParagraph.text()).toBe("count:1")
  })

  // 测试 add() 方法是否正确更新 mainStore 的状态。
  it("uses add() method to update store state", async () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              mainStore: { count: 0, name: "Test Name" }
            }
          })
        ]
      }
    })

    const button = wrapper.findAll("button")[2] // 第三个 button 是 add() 的按钮
    const countParagraph = wrapper.findAll("p")[1] // 第二个 p 标签显示的是 mainStore.count

    expect(countParagraph.text()).toBe("count:0")

    await button.trigger("click")
    expect(countParagraph.text()).toBe("count:1")
    expect(wrapper.findAll("p")[2].text()).toBe("count:1")
  })

  // 测试 mainStore.addAmount(3) 方法是否正确更新 mainStore 的状态。
  // it('uses mainStore.addAmount(3) method to update store state', async () => {
  //   const wrapper = mount(HelloWorld, {
  //     global: {
  //       plugins: [createTestingPinia({
  //         initialState: {
  //           mainStore: { count: 0, name: 'Test Name' },
  //         },
  //         createSpy: vi.fn(), // 使用 Vitest 的 vi.fn() 代替 jest.fn()
  //       })],
  //     }
  //   })

  //   // const mainStore = useMainStore() // 获取 store 实例
  //   const button = wrapper.findAll('button')[3] // 第四个 button 是 mainStore.addAmount(3) 的按钮
  //   const countParagraph = wrapper.findAll('p')[1] // 第二个 p 标签显示的是 mainStore.count
  //   expect(countParagraph.text()).toBe('count:0')
  //   // await mainStore.addAmount(3)
  //   await button.trigger('click')
  //   // 等待 Vue 完成 DOM 更新
  //   await nextTick()
  //   expect(countParagraph.text()).toBe('count:3')
  // })
})
