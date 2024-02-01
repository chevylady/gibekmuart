import { createRouter, createWebHashHistory } from 'vue-router'
import mainView from '../views/mainView.vue'
import contactView from '../views/contactView.vue'
import galleryView from '../views/galleryView.vue'
import privacyPolicyView from '../views/privacyPolicyView.vue'
import conditionsView from '../views/conditionsView.vue'

const routes = [
	{
		path: '/',
		name: 'main',
		component: mainView,
	},
	{
		path: '/gallery',
		name: 'gallery',
		component: galleryView,
	},
	{
		path: '/contact',
		name: 'contact',
		component: contactView,
	},
	{
		path: '/privacy',
		name: 'privacy',
		component: privacyPolicyView,
	},
	{
		path: '/conditions',
		name: 'conditions',
		component: conditionsView
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
