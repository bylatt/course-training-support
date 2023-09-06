import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

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
  {
    path: "/courses",
    name: "Courses",
    component: Course,
  },
  {
    path: "/waitingList",
    name: "WaitingList",
    component: Waiting,
  },
  {
    path: "/class_available",
    name: "ClassAvailable",
    component: ClassAvailable,
  }
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
