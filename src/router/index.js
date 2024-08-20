import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import NotFound from "../views/NotFound.vue";
import ProjectDetail from "../views/ProjectDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/projects/:id",
    name: "projectDetail",
    component: ProjectDetail,
    props: (route) => ({
      id: parseInt(route.params.id), // Pass `id` as a prop to ProjectDetail
    }),
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

export default router;
