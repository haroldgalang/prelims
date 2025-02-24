<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Email: <input v-model="email" type="email" required /></label>
      <label>Password: <input v-model="password" type="password" required /></label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView", // Updated component name
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const users = [
        { email: "admin@example.com", role: "admin" },
        { email: "user@example.com", role: "user" },
      ];
      const user = users.find((u) => u.email === this.email);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/projects");
      } else {
        alert("Invalid credentials");
      }
    },
  },
};
</script>
