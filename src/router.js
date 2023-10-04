import { createRouter, createWebHistory } from 'vue-router';

import TheHome from "./components/TheHome.vue";
import ToDo from "./components/ToDo.vue";
import TheProfile from "./components/TheProfile.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: TheHome},
        {path: "/todo", component: ToDo},
        {path: "/profile", component: TheProfile}
    ]
})

export default router;