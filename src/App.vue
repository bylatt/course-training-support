<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'CourseDetail', params: { id: 123 } }">View Course Details</router-link>
      </li>
    </ul>
  </div>

  <router-view />
</template>