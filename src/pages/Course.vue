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
          <i class="fa-regular fa-clock"></i> {{ course.duration }}
        </p>
        <a href="/courses/{{ course.id }}" target="_blank" class="btn-primary"
          >View Course <i class="fa-solid fa-chevron-right"></i
        ></a>
      </div>
    </div>
  </div>
</template>
