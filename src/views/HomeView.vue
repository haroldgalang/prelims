<template>
  <div>
    <h1>Welcome to the Project Management System</h1>
    <p>Manage your projects efficiently.</p>

    <div>
      <router-link to="/projects">Go to Projects</router-link>
    </div>
    <div>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
p {
  font-size: 18px;
}
</style>
