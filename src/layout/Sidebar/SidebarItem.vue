<template>
    <div v-if="!item.hidden">
        <el-menu-item v-if="hasOneShowing && (!onlyOneChild.children||onlyOneChild.noShowingChildren)"
        :index="resolvePath(onlyOneChild)" :route="resolvePath(onlyOneChild)">{{resolvePath(onlyOneChild)}}</el-menu-item>
        <el-sub-menu v-else :index="resolvePath(item)">
            <template #title>
                <span :icon="Location"></span>
                <!-- <el-icon><location /></el-icon> -->
                <span>{{item.path}}</span>
            </template>
            <SidebarItem
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                :basePath="resolvePath(child)"
            />
        </el-sub-menu>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    import { Location } from '@element-plus/icons-vue'
    const props = defineProps({
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    })
    // let item = ref(props.item)
    let { item } = props
    let onlyOneChild:any = ref({})
    const hasOneShowingChild = (children=[], parent: any)=> {
        const showingChildren = children.filter((item1: any) => {
            if (item1.hidden) {
                return false
            } else {
                onlyOneChild = item1
                return true
            }
        })
        if (showingChildren.length === 1) {
            return true
        }
        if (showingChildren.length > 1) {
            onlyOneChild = { ... parent, noShowingChildren: false }
            return false
        }
        if (showingChildren.length === 0) {
            onlyOneChild = { ... parent, noShowingChildren: true }
            return true
        }
        return false
    }
    let hasOneShowing = hasOneShowingChild(item.children,item)
    const resolvePath = (item: any)=> {
        if(item.noShowingChildren){
           return props.basePath
        }else{
            return props.basePath + '/' + item.path
        }

    }
</script>
