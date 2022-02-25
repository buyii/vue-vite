import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import store from '@/store';
import LayOut from '../layout/index.vue'

function getRoutes() {
	const { context, mainRoutes } = loadRouters();
	console.log(mainRoutes)
	console.log(context)
	store.dispatch("user/setRouter", mainRoutes)
	/**
	 * 如果要对 routes 做一些处理，请在这里修改
	 */
	let routes = [
		{
			path: '/',
			name: 'LayOut',
			meta: {
			  title: "首页",
			},
			component: LayOut,
			redirect: () => {
				return { path: '/Dashboard' }
			},
			children: mainRoutes
		},
		{
			path: "/:pathMatch(.*)*",
			name: '404',
			component: () => import("@/views/404.vue"),
			hidden: true
		},
	]
	return routes;
}
export const defaultRoutes = [
	{
		path: '/',
		name: 'LayOut',
		meta: {
		  title: "首页",
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
			{
				path: "/About",
				name: "About",
				component: () => import('../views/Aboutbox/index.vue'),
				children: [
					{
						path: 'About',
						name: 'About',
						component: () => import('../views/About/index.vue'),
					},
					{
						path: 'About1',
						name: 'About1',
						component: () => import('../views/About/index.vue'),
					}
				]
			},
		]
	},
	{
		path: "/:pathMatch(.*)*",
		name: '404',
		component: () => import("@/views/404.vue"),
		hidden: true
	},
]
	
const router = createRouter({
    history: createWebHistory(),
    routes: getRoutes()
})

router.beforeEach((to, from, next) => {
	// getRoutes()
	// store.dispatch("user/setRouter", defaultRoutes)
	next()
})

export default router;

/** 以下代码不要修改 */
function loadRouters() {
	const context = import.meta.globEager("../views/**/*.vue");
    const mainRoutes: RouteRecordRaw[] = [];
    Object.keys(context).forEach((key: any) => {
        if (key === "./index.ts"||key.includes('404')||key.includes('component')) return;
		let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
		let path = key.replace(/(\.\.\/views\/|\.vue|\/index.vue)/g, '');
		path = "/" + path;
		if (name === "Dashboard") path = "/";
		mainRoutes.unshift({
			path: path,
			name: name,
			component: () => import(`../views/${name}.vue`)
		})
    });

    return { context, mainRoutes }
}