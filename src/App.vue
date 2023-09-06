<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/courses">Courses</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/waitingList">Waiting list</router-link>
      </li>
    </ul>
  </div>

  <router-view />
</template>
