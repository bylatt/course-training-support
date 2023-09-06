<!-- <script setup>
import { ref, onMounted } from 'vue'
import * as api from '../api.js'
let courses = ref(null)
onMounted(() => {
    api.getCourses().then(result => {
        courses = ref(result)
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
    console.log(api)
    console.log('mounted')
})
</script> -->

<template>
    <div>Course</div>
    <!-- <div v-for="course in courses">
        {{ course.id }}
    </div> -->
</template>