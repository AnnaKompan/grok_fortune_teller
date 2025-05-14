import { createRouter, createWebHistory } from "vue-router";
import Browse from "../views/Browse.vue";
import Home from "../views/Home.vue";
import Fortune from "../views/Fortune.vue";

// Define routes
const routes = [
  {
    path: "/", // URL path (i.e., http://localhost/)
    name: "Browse", // Route name
    component: Browse, // Maps the route to the component
  },
  {
    path: "/home", // URL path (i.e., http://localhost/home)
    name: "Home", // Route name
    component: Home, // Maps the route to the component
  },
  {
    path: "/fortune",
    name: "Fortune",
    component: Fortune,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
