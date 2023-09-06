import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Course from "../pages/Course.vue";
import Booking from "../pages/Booking.vue";
import ClassAvailable from "../pages/ClassAvailable.vue";
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
