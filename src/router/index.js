import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		},
		{
			path: '/:id',
			name: 'stage',
			component: () => import('../views/StageView.vue')
		}
	]
});

export default router;