const about = [
    {
        path: "/Aboutbox",
        name: "Aboutbox",
        titleName: '关于',
        component: () => import('../views/Aboutbox/index.vue'),
    },
    {
        path: 'About',
        name: 'About',
        component: () => import('../views/About/index.vue'),
    }
]

export default about