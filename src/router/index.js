import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import NotFound from "../views/NotFound.vue";
import ProjectDetail from "../views/ProjectDetailView.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
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
  ],
});
export default router;
