<template>
    <div v-for="(item,index) in routers" :key="index">
        <el-menu-item v-if="item.length==1" :index="item[0].path" :route="item[0].path">
            <el-icon><HomeFilled/></el-icon>
            <span>{{item[0].name}}</span>
        </el-menu-item>
        <el-sub-menu v-else :index="index+'1'">
            <template #title>
                <el-icon><Avatar /></el-icon>
                <span>{{item[0].titleName}}</span>
            </template>
            <el-menu-item v-for="(child,index) in item" :key="child.path" :index="child.path" :route="child.path">{{child.name}}</el-menu-item>
        </el-sub-menu>
    </div>
</template>
<script lang="ts" setup>
    import { computed } from 'vue'
    import { Avatar, HomeFilled } from '@element-plus/icons-vue'
    import { useStore } from '@/store';

    const store = useStore();
    const routers = computed(()=> store.getters["user/getRouter"]);
</script>