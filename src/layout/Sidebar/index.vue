<template>
    <el-menu
        style="height: 100%;"
        router
        active-text-color="#409eff"
        background-color="#304156"
        class="el-menu-vertical-demo"
        :default-active="activeMenu"
        text-color="#bfcbd9"
    >
        <el-menu-item index="/Dashboard" route="/Dashboard">
            <el-icon><HomeFilled/></el-icon>
            首页
        </el-menu-item>
        <SidebarItem />
    </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { HomeFilled } from '@element-plus/icons-vue'
import SidebarItem from './SidebarItem.vue';
let activeMenu = ref(useRoute().fullPath)
</script>