
import VueRouter from 'vue-router';
let routes = [

   {
    	path: '/',
    	component: require('./components/Home.vue')

    },
    
    {
    	path: '/listing',
    	component: require('./components/ListApartment.vue')

    },

	{
		path: '/signup',
		component:  require('./components/UserSignup.vue')
   

	},

	{

		path: '/login',
		component:  require('./components/UserLogin.vue')

	}

]


export default new VueRouter({

	routes,
	scrollBehavior (to, from, savedPosition) {
  			return { x: 0, y: 0 }
    }
})