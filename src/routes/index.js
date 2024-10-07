// import AboutPage from "@/views/AboutPage.vue";
// import ContactPage from "@/views/ContactPage.vue";
// import Feedback from "@/views/Feedback.vue";
// import HomePage from "@/views/HomePage.vue";
// import ProfilePage from "@/views/ProfilePage.vue";
// import UserPage from "@/views/UserPage.vue";

import { createRouter, createWebHistory } from "vue-router";

// B1 : Định nghĩa danh sách các route
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: "/",
    //   alias: ["/home", "/home-page", "/trang-chu"],
    //   component: import(/*webpackChunkName: "home"*/ "@/views/HomePage.vue"),
    //   name: "home",
    // },
    // {
    //   path: "/about",
    //   component: import(/*webpackChunkName: "about"*/ "@/views/AboutPage.vue"),
    //   name: "about",
    // },
    // {
    //   path: "/contact",
    //   component: import(
    //     /*webpackChunkName: "contact"*/ "@/views/ContactPage.vue"
    //   ),
    //   name: "contact",
    // },
    // {
    //   path: "/feedback",
    //   component: import(
    //     /*webpackChunkName: "feedback"*/ "@/views/Feedback.vue"
    //   ),
    //   name: "feedback",
    // },
    // {
    //   path: "/user/:id",
    //   component: import(/*webpackChunkName: "user"*/ "@/views/UserPage.vue"),
    //   name: "userPage",
    //   redirect: (to) => `/profile/${to.params.id}`,
    // },
    // {
    //   path: "/profile/:id",
    //   component: import(
    //     /*webpackChunkName: "profile"*/ "@/views/ProfilePage.vue"
    //   ),
    //   name: "profilePage",
    // },
    // {
    //   path: "/list-product",
    //   component: import(
    //     /*webpackChunkName: "listProduct"*/ "@/views/ListProduct.vue"
    //   ),
    //   name: "listProduct",
    // },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: import(
    //     /*webpackChunkName: "notFound"*/ "@/views/NotFound.vue"
    //   ),
    //   name: "notFound",
    // },
    // {
    //   path: "/admin",
    //   component: import(/*webpackChunkName: "admin"*/ "@/views/AdminIndex.vue"),
    //   name: "admin",
    //   beforeEnter: (to,from,next) => {
    //     const isAuthentacation = true;
    //     if (isAuthentacation) {
    //         // Cho phép chuyển vào trang admin
    //         next();
    //       } else {
    //         next("/");
    //       }
    //     },
    //   children: [
    //     {
    //       path: "manager-user",
    //       component: import(
    //         /*webpackChunkName: "managerUser"*/ "@/views/ManagerUser.vue"
    //       ),
    //       name:"managerUser"
    //     },
    //   ],
    // },
    // {
    //     path: "manager-product",
    //     component: import(
    //         /*webpackChunkName: "managerProduct"*/ "@/views/ManagerProduct.vue"
    //       ),
    //     name: "managerProduct",
    // },   /*bài tập */
    {
      path: "/",
      alias: ["/home"],
      component: import(/*webpackChunkName: "home"*/ "@/components/Home.vue"),
      name: "home",
    },
    {
      path: "/about",
      alias: ["/about"],
      component: import(/*webpackChunkName: "about"*/ "@/components/About.vue"),
      name: "about",
    },
    {
      path: "/contact",
      alias: ["/get-in-touch"],
      component: import(
        /*webpackChunkName: "contact"*/ "@/components/Contact.vue"
      ),
      name: "contact",
    },
    {
      path: "/search",
      alias: ["/search"],
      component: import(
        /*webpackChunkName: "search"*/ "@/components/Search.vue"
      ),
      name: "search",
    },
    {
      path: "/:pathMatch(.*)*",
      component: import(
        /*webpackChunkName: "notFound"*/ "@/components/NotFound.vue"
      ),
      name: "notFound",
    },
    {
      path: "/login",
      alias: ["/login"],
      component: import(/*webpackChunkName: "login"*/ "@/components/Login.vue"),
      name: "login",
    },
    {
      path: "/dashboard",
      alias: ["/dashboard"],
      component: import(
        /*webpackChunkName: "dashboard"*/ "@/components/Dashboard.vue"
      ),
      name: "dashboard",
      beforeEnter: (to, from, next) => {
        const isLoggedIn = false;
        if (isLoggedIn) {
          // Cho phép chuyển vào trang dashboard
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/admin",
      alias: ["/admin"],
      component: import(/*webpackChunkName: "admin"*/ "@/components/Admin.vue"),
      name: "admin",
      children: [
            {
              path: "manager-user",
              component: import(
                /*webpackChunkName: "managerUser"*/ "@/components/Users.vue"
              ),
              name:"managerUser"
            },
            {
                path: "manager-product",
                component: import(
                  /*webpackChunkName: "managerProduct"*/ "@/components/Products.vue"
                ),
                name:"managerProduct"
              },
              {
                path: "manager-settings",
                component: import(
                  /*webpackChunkName: "managerSettings"*/ "@/components/Settings.vue"
                ),
                name:"managerSettings"
              },
          ],
           scrollBehavior: (to, from, savedPosition)=>{
        if(savedPosition){
            return savedPosition;
        }else{
            return{
            top:0,
            behavior: "smooth",
        }
        }
    }
    },
   
  ],
});
export default router;
