<template>
    <div v-for="item in arr" >
        <Test :ref="(el:any)=>setItemRef(el,item)" :item="item" ></Test>
    </div>
    <div>
        <el-button type="primary" @click="cli" >点击</el-button>
    </div>
</template>


<script setup lang="ts">
import Test from "@/components/test.vue"
import * as request from '@/utils/request'
    let cli = async ()=>{
        itemRefs.G.log(1)
        let url ='http://test.livejx.cn/fns/common/selectCityPermissions'
        let result = await request.Get(url,{token:localStorage.getItem('token'),username:localStorage.getItem('username')})
        console.log(result)
    }
    let arr = [
        {name: 'A', id: 1},
        {name: 'B', id: 2},
        {name: 'C', id: 3},
        {name: 'D', id: 4},
        {name: 'E', id: 5},
        {name: 'F', id: 6},
        {name: 'G', id: 7},
        ]
    let itemRefs:any = {}
    let setItemRef = (el:any,item:any) => {
      if (el) {
        itemRefs[item.name] = el
      }
    }
</script>

<style>

</style>
