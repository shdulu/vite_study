<template>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps<{
  msg: string
}>()
</script>
