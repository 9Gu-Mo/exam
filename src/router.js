import { createWebHistory, createRouter } from "vue-router";
import TestComponent from "@/components/TestComponent.vue";
import Main from "@/components/Main.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/test",
        name: "TestComponent",
        component: TestComponent,
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;