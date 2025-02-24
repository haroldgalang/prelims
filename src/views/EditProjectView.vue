<template>
  <div>
    <h2>Edit Project</h2>
    <router-link to="/projects">Back to Projects</router-link>

    <div v-if="project">
      <p><strong>Project Name:</strong> {{ project.name }}</p>
      <p><strong>Status:</strong>
        <!-- Status can be edited even if it's 'Done' -->
        <select v-model="project.status">
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </p>
      <button @click="save" :disabled="project.status === 'Done'">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: null
    };
  },
  created() {
    const projectId = this.$route.params.id;
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    this.project = projects.find(p => p.id == projectId) || null;
  },
  methods: {
    save() {
      if (!this.project) return;

      let projects = JSON.parse(localStorage.getItem("projects")) || [];
      const index = projects.findIndex(p => p.id === this.project.id);

      if (index !== -1) {
        projects[index].status = this.project.status;
        localStorage.setItem("projects", JSON.stringify(projects));
      }

      alert("Project updated!");
      this.$router.push("/projects");
    }
  }
};
</script>
