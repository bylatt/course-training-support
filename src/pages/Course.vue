<script setup>
import { ref, onMounted } from 'vue'
import * as api from '../api.js'
onMounted(() => {
    api.getCourses().then(result => console.log(result)).catch(err => console.log(err))
    api.getCourse("3ARi1sfUR8K9NrDsYkJm").then(result => console.log(result)).catch(err => console.log(err))
})
</script>

<template>
    <div>Course</div>
</template>