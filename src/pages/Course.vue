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
        <img :src=course.image />
        <div class="title">
            <h3>{{ course.title }} - {{ course.duration }}</h3>
        </div>
        <div class="body">{{ course.description }}</div>
    </div>
</template>
