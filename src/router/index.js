import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Course from "../pages/Course.vue";
import Waiting from "../pages/WaitingList.vue";
import ClassAvailable from "../pages/ClassAvailable.vue";
import Booking from "../pages/Booking.vue";

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
  },
  {
    path: "/class_available",
    name: "ClassAvailable",
    component: ClassAvailable,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  }
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
