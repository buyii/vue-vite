<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive, ref } from 'vue'
const button = reactive({
  autoInsertSpace: true,
})
const msg = reactive({
  max: 3,
})
const size = ref("small")
</script>

<template>
  <el-config-provider :button="button" :message="msg" :size="size">
    <router-view></router-view>
  </el-config-provider>
</template>

<style>

</style>
