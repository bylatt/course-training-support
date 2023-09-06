<script setup>
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
  <div v-for="course in courses" class="list-items">
    <img :src="course.image" alt="Random image" />
    <div class="content">
      <h3>{{ course.title }}</h3>
      <p>{{ course.description }}</p>
      <p><i class="fa-regular fa-clock"></i> {{ course.duration }}</p>
      <a :href="'/courses/' + course.id" target="_blank" class="btn-primary"
        >View Course <i class="fa-solid fa-chevron-right"></i
      ></a>
    </div>
  </div>
</template>
