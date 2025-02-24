import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import EditProjectView from '../views/EditProjectView.vue';

const isAuthenticated = () => !!localStorage.getItem('user'); // Simulated auth check
const userRole = () => JSON.parse(localStorage.getItem('user'))?.role || 'guest';

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  {
    path: '/projects',
    component: ProjectsView,
    meta: { requiresAuth: true } // Global Navigation Guard
  },
  {
    path: '/projects/edit/:id',
    component: EditProjectView,
    meta: { requiresAuth: true, requiresAdmin: true } // Admin-only route
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// **Global Navigation Guard**
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login');
  } else if (to.meta.requiresAdmin && userRole() !== 'admin') {
    next('/projects');
  } else {
    next();
  }
});

export default router;
