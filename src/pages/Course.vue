<script setup>
import { ref, onMounted } from 'vue'
import * as api from '../api.js'
onMounted(() => {
    api.getCourses().then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
    console.log(api)
    console.log('mounted')
})
</script>

<template>
    <div>Course</div>
</template>