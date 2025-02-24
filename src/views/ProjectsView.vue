<template>
  <div>
    <h2>Projects</h2>
    <router-link to="/">Home</router-link> |
    <button @click="logout">Logout</button>

    <!-- Add Project Form (Visible lang sa Admin) -->
    <div v-if="isAdmin">
      <h3>Add New Project</h3>
      <form @submit.prevent="addProject">
        <label>
          Project Name:
          <input v-model="newProject.name" type="text" placeholder="Enter project name" required />
        </label>

        <label>
          Project Size:
          <select v-model="newProject.size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <label>
          Start Date:
          <input v-model="newProject.startDate" type="date" required />
        </label>

        <label>
          End Date:
          <input v-model="newProject.endDate" type="date" required />
        </label>

        <button type="submit">Add Project</button>
      </form>
    </div>

    <h3>Project List</h3>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <strong>{{ project.name }}</strong> -
        <em>Size: {{ project.size }}</em> -
        <span>Status: {{ project.status }}</span>
        <br />
        🗓️ Start: {{ project.startDate }} | 🏁 End: {{ project.endDate }}

        <router-link v-if="isAdmin" :to="'/projects/edit/' + project.id">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      newProject: {
        name: "",
        size: "Small",
        startDate: "",
        endDate: "",
        status: "In Progress"
      },
      user: JSON.parse(localStorage.getItem("user")) || {}
    };
  },
  computed: {
    isAdmin() {
      return this.user.role === "admin";
    }
  },
  methods: {
    loadProjects() {
      this.projects = JSON.parse(localStorage.getItem("projects")) || [];
    },
    addProject() {
      if (!this.newProject.name || !this.newProject.startDate || !this.newProject.endDate) {
        alert("Please fill out all fields.");
        return;
      }

      const projects = JSON.parse(localStorage.getItem("projects")) || [];
      const newId = projects.length + 1;
      const newProj = { ...this.newProject, id: newId };

      projects.push(newProj);
      localStorage.setItem("projects", JSON.stringify(projects));

      // Update view
      this.loadProjects();

      // Reset Form
      this.newProject = { name: "", size: "Small", startDate: "", endDate: "", status: "In Progress" };

      alert("Project added successfully!");
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    }
  },
  created() {
    this.loadProjects();
  }
};
</script>
