import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import HelloTest from "@/components/HelloTest.vue"

describe("HelloTest", () => {
  it("renders the correct message", () => {
    const wrapper = mount(HelloTest, {
      props: {
        msg: "Hello Vitest"
      }
    })
    expect(wrapper.text()).toBe("Hello Vitest")
  })
})
