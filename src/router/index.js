import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import AñadirProductos from "../views/AñadirProductos.vue"
import VistaProductos from "../views/VistaPro.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { public: true }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { public: true }
  },
  {
    path: "/añadirproductos",
    name: "AñadirProductos",
    component: AñadirProductos,
    meta: { public: false }
  },
  {
    path: "/productos/:categoria",
    name: "productos",
    component: VistaProductos,
    props:true,
    meta: { public: true }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to) {
    if (to.hash) {
      return window.scrollTo({ 
        top: document.querySelector(to.hash).offsetTop, 
        behavior: 'smooth' 
      })
    } else {
      return { x: 0, y: 0 }
    }
  }

});

router.beforeEach((to, from, next) => {
  if (to.meta.public) {
    next()
  }
  else {
    const isLoggedIn = JSON.parse(localStorage.getItem("authenticate"))
    window.console.log(isLoggedIn)
    if (isLoggedIn) {
      next()
    }
  }
});

export default router
