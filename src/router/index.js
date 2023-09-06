import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import CourseDetail from "../pages/CourseDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/courses/:id",
    name: "CourseDetail",
    component: CourseDetail,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
