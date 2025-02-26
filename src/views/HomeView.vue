<template>
  <div class="container">
    <h1>Project Management System</h1>
    <p>Manage your projects efficiently.</p>

    <div class="link-container">
      <router-link to="/projects" class="link">Go to Projects</router-link>
      <router-link to="/login" class="link">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
}

h1 {
  color: #42b983;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.link-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.link {
  text-decoration: none;
  color: white;
  background-color: #42b983;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #368a6f;
}
</style>
