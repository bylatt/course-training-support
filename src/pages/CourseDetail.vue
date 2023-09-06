<template>
  <div>
      <!-- Course Banner Image -->
      <img :src="course.image" alt="Course Banner" class="course-banner">

      <!-- Course Title -->
      <h1 class="course-title">{{ course.title }}</h1>

      <!-- Course Description -->
      <p class="course-description">{{ course.description }}</p>

      <!-- Time Period -->
      <p class="time-period">{{ course.timePeriod }}</p>

      <h1 class="course-title">Course Detail</h1>
      <div class="content" v-html="course.detail"></div>
      <!-- Yellow Button (Sticky at Bottom) -->
      <button @click="navigateToBookingPage(this.$route.params.id)" class="yellow-button">View Class Schedule</button>
  </div>
</template>

<script>
import * as api from '../api.js';
export default {
  data() {
    return {
      loading: false,
      course: null,
      error: null,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.course = null
      this.loading = true
      api.getCourse(this.$route.params.id).then(result => {
        this.loading = false
        this.course = result
        document.title = result.title
        console.log(this.course)
      }).catch(err => {
        this.loading = false
        this.error = err
      })
    },
    navigateToBookingPage(courseId) {
      this.$router.push(`/class_available/${courseId}`)
    },
  }
};
</script>

<style scoped>
/* Component-specific styles */
.course-banner {
  max-width: 100%;
  height: auto;
}

.course-title {
  font-size: 24px;
  margin-top: 20px;
  text-align: left;
}

.course-description {
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
}

.time-period {
  font-size: 16px;
  margin-top: 10px;
  color: #999; /* Adjust the color as needed */
  text-align: left;
}

/* Yellow Button */
.yellow-button {
  background-color: #FECE50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  max-width: 100%;
  margin-bottom: 20px; /* Add some margin for spacing */
}

img {
  width: 100%;
}

.content {
  text-align: left;
}
</style>