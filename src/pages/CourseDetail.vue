<template>
  <div class="layout">
      <!-- Course Banner Image -->
      <img :src="course.image" alt="Course Banner" class="course-banner">

      <div class="inner">
        <!-- Course Title -->
        <h1 class="course-title">{{ course.title }}</h1>

        <!-- Course Description -->
        <p class="course-description">{{ course.description }}</p>

        <h1 class="course-detail">Course Detail</h1>

        <div class="content" v-html="course.detail"></div>


        <!-- Time Period -->
        <p class="time-period">{{ course.timePeriod }}</p>

        <!-- Yellow Button (Sticky at Bottom) -->
        <button @click="navigateToBookingPage(this.$route.params.id)" class="yellow-button">View Class Schedule</button>
      </div>
      <!-- Yellow Button (Sticky at Bottom) -->
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

.layout {
  width: 100%;
  max-width: 960px;
  background-color: white;
}
.inner {
  padding: 40px;
}
.course-banner {
  max-width: 100%;
  height: auto;
  width: 100%;
}

.course-detail {
  font-size: 36px;
  margin-top: 20px;
  text-align: left;
}

.course-title {
  font-size: 42px;
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
  background-color: #eeb51f;
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

.content {
  text-align: left;
}
</style>