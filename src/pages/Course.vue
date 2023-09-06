<script setup>
import { ref, onMounted } from 'vue'
import * as api from '../api.js'
let courses = ref([])
onMounted(() => {
    api.getCourses().then(result => {
        courses.value = result
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
    console.log(api)
    console.log('mounted')
})
</script>

<template>
    <div v-for="course in courses">
        {{ course.title }}
    </div>
</template>