import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Course from "../pages/Course.vue";
import CourseDetail from "../pages/CourseDetail.vue";
import Waiting from "../pages/WaitingList.vue";
import ClassAvailable from "../pages/ClassAvailable.vue";
import Booking from "../pages/Booking.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Course,
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
    path: "/class_available/:id",
    name: "ClassAvailable",
    component: ClassAvailable,
  },
  {
    path: "/booking/:id",
    name: "Booking",
    component: Booking,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
