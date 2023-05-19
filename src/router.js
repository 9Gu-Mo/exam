import { createWebHistory, createRouter } from "vue-router";
import TestComponent from "@/components/TestComponent.vue";
import TestComponent2 from "@/components/TestComponent2.vue";
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
    },
    {
        path: "/test2",
        name: "TestComponent2",
        component: TestComponent2
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;