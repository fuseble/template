import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "home",
		component: () => import("@/pages/Home/home.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
