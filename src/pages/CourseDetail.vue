<template>
  <div>
      <!-- Course Banner Image -->
      <img :src="course.imageUrl" alt="Course Banner" class="course-banner">

      <!-- Course Title -->
      <h1 class="course-title">{{ course.title }}</h1>

      <!-- Course Description -->
      <p class="course-description">{{ course.description }}</p>

      <!-- Time Period -->
      <p class="time-period">{{ course.timePeriod }}</p>

      <!-- Yellow Button (Sticky at Bottom) -->
      <button class="yellow-button">Open Course</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
        imageUrl: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/b574ec3f-672a-4bc9-9457-4bc7f0e1d982.png', // Replace with your course image URL
        title: 'Course Title',
        description: 'Course Description',
        timePeriod: 'Period: 2 days',
      },
    };
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
  margin-bottom: 20px; /* Add some margin for spacing */
}
</style>