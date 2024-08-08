<script setup lang="ts">
import { h, Component } from "vue"
import { NIcon, NMenu } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { RouterLink } from "vue-router"
import { HomeOutline, LogInOutline } from "@vicons/ionicons5"
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(RouterLink, { to: { name: "home" } }, { default: () => "首页" }),
    key: "home",
    icon: () => h(NIcon, null, { default: () => h(HomeOutline) }) //带有插槽的对象
  },
  {
    label: () =>
      h(RouterLink, { to: { name: "login" } }, { default: () => "登录" }),
    key: "login",
    icon: () => h(NIcon, null, { default: () => h(LogInOutline) })
  }
]
</script>

<template>
  <n-menu :options="menuOptions" />
  <router-view></router-view>
</template>

<style></style>
