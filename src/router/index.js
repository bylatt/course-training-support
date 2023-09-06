import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Course from "../pages/Course.vue";
import Waiting from "../pages/WaitingList.vue";

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
    path: "/courses",
    name: "Courses",
    component: Course,
  },
  {
    path: "/waitingList",
    name: "WaitingList",
    component: Waiting,
  }
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
