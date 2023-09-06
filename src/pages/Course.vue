<script setup>
import "/src/assets/main.css";
import { ref, onMounted } from "vue";
import * as api from "../api.js";
let courses = ref([]);
onMounted(() => {
  api
    .getCourses()
    .then((result) => {
      courses.value = result;
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(api);
  console.log("mounted");

  // console.log("=========== Booking Testing ===========");
  // let bookingObj = {
  //     name: 'Fiilm Filmm',
  //     email: 'paphawee@appsynth.net',
  //     phoneNumber: '08123456789',
  //     company: 'Appsynth',
  //     classId: 'LzavWkfZAw1sqS4Hibz5',
  //     className: 'Hello World',
  //   }
  // api.submitBooking(bookingObj).then(result => {
  //   console.log(result)
  // }).catch(err => {
  //     console.log(err)
  // })
  // console.log("=========== Booking Testing ===========");
});
</script>

<template>
  <div class="com-logo">
    <img
      src="https://i0.wp.com/odd-e.kr/wp-content/uploads/2018/12/odd-e_logo_500wd_transparent-1.png?resize=500%2C500&ssl=1"
    />
  </div>
  <div class="course-container">
    <div v-for="course in courses" class="list-items">
      <div><img :src="course.image" /></div>
      <div class="content">
        <h3 class="title">{{ course.title }}</h3>
        <p class="description">{{ course.description }}</p>
        <p class="duration">
          <font-awesome-icon icon="fa-solid fa-clock" class="icon" />
          {{ course.duration }}
        </p>
        <router-link :to="`/courses/${course.doc_id}`">
          View Course <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>
