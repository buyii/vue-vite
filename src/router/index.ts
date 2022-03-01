import { createRouter, createWebHistory } from "vue-router"
import { store } from '@/store';
import LayOut from '../layout/index.vue'

interface AnyObject {
	[key: string]: any
}

export function loadModules() {
    const context = import.meta.globEager("./*.ts") as AnyObject;

    const modules:any = [];

    Object.keys(context).forEach((key: string) => {
        if (key === "./index.ts") return;
        modules.push(context[key].default)
    });
    
    return { modules }
}

let { modules } = loadModules()

export const routeArr = modules.flat()
export const Routes = [
	{
		path: '/',
		name: 'LayOut',
		meta: {
		  title: "LayOut",
		  login: true
		},
		component: LayOut,
		redirect: () => {
			return { path: '/Dashboard' }
		},
		children: [
			{
				path: '/Dashboard',
				name: '首页',
				component: () => import('../views/Dashboard/index.vue'),
			},
			...routeArr
		]
	},
	{
		path: "/login",
		name: '登录',
		component: () => import("@/views/Login.vue"),
		hidden: true
	},
	{
		path: "/:pathMatch(.*)*",
		name: '404',
		component: () => import("@/views/404.vue"),
		hidden: true
	},
]
store.dispatch("user/setRouter", modules)
const router = createRouter({
    history: createWebHistory(),
    routes: Routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.login)) {
		if (localStorage.getItem('token') == 'undefined' || !localStorage.getItem('token')) {
			// next()
			// next({
			// 	path: '/login',
			// })
		}
	  }
	next()
})

export default router;