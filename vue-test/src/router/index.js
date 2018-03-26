import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
	    { path: '/',name: 'main',component: main },
	    {path: '/list', name: 'list', component: List}
	      

	    
	  ]
	})
