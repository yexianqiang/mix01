import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import List from '@/components/List'
import Swiper from '@/components/Swiper'
import GoodsDetail from '@/components/GoodsDetail'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
	    { path: '/',name: 'main',component: main },
	    {path: '/list', name: 'list', component: List},
	    {path: '/swiper', name:'swiper', component: Swiper},
	    {path: '/goodsDetail', name:'goodsDetail', component: GoodsDetail}
	  ]
	})
