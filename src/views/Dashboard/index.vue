<template>
    <div v-for="item in arr" >
        <Test :ref="(el:any)=>setItemRef(el,item)" :item="item" ></Test>
    </div>
    <div>
        <HelloWorld msg="message" />
    </div>
    <div>
        <el-button type="primary" @click="cli" >点击</el-button> 
        <el-button type="primary" @click="cli1" >验证token</el-button> 
    </div>
    <div>
        <el-button type="primary" @click="cli2" >点击2</el-button> 
        <el-button type="primary" @click="cli12" >验证token2</el-button> 
    </div>
</template>


<script setup lang="ts">
// import Test from "@/components/test.vue"
import * as request from '@/utils/request'
import { Login, Protected, Login1, Protected1, getCpu } from '@/api/index'
    let cli = async ()=>{
        let loginForm = {
            username: 'jane',
            password: 'password'
        }
        Login(loginForm).then(res=>{
            console.log(res)
            localStorage.setItem('token',res.access_token)
          }).catch(err=>{
            console.log(err)
          })
        // ElMessage.success("xiaoxi")
        // itemRefs.G.log(1)
        // let url ='http://test.livejx.cn/fns/common/selectCityPermissions'
        // let result = await request.Get(url,{token:localStorage.getItem('token'),username:localStorage.getItem('username')})
        // console.log(result)
    }
    let cli1 =async () => {
        Protected({}).then(res=>{
            console.log(res)
        }).catch(err=>{
        console.log(err)
        })
    }
    let cli12 =async () => {
        Protected1({}).then(res=>{
            console.log(res)
        }).catch(err=>{
        console.log(err)
        })
        getCpu({}).then(res=>{
            console.log(res)
        }).catch(err=>{
        console.log(err)
        })
    }
    let cli2 =async () => {
        let loginForm = {
            username: 'admin',
            password: '12345678'
        }
        Login1(loginForm).then(res=>{
            console.log(res)
            localStorage.setItem('token',res.access_token)
        }).catch(err=>{
            console.log(err)
        })
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
