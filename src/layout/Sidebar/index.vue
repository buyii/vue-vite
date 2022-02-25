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
        <SidebarItem
            v-for="item in routers"
            :key="item.path"
            :item="item"
            :basePath="item.path"
        />
    </el-menu>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store';
import SidebarItem from './SidebarItem.vue';
let activeMenu = ref(useRoute().fullPath)
const st = useStore();
const routers = computed(()=> st.getters["user/getRouter"]);
</script>