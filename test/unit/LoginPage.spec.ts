import { mount } from "@vue/test-utils"
import LoginPage from "@/pages/LoginPage.vue"

test("LoginPage should render correctly", async () => {
  const wrapper = mount(LoginPage)
  expect(wrapper.html()).toContain("<h3>this is login page</h3>")
})
