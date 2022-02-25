<template>
    <el-menu
        style="height: 100%;"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
    >
        <template v-for="item in routers">
            <el-menu-item v-if="!item.children||item.children.length<1" :index="item.path"></el-menu-item>
            <el-sub-menu v-else :index="item.path">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{item.name}}</span>
                </template>
            <el-menu-item  index="1-1">item one</el-menu-item>
        </el-sub-menu>
        </template>
        
        
    </el-menu>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { Location, Document, Menu as IconMenu, Setting, } from '@element-plus/icons-vue'
import { useStore } from '@/store';
const st = useStore();
const routers = computed(()=>{return st.getters["user/getRouter"]});
</script>