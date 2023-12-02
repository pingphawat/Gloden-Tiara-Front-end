// router.js
import { createRouter, createWebHistory } from 'vue-router';
import PawnAmount from '@/views/pawnamount.vue';

const routes = [
    // ... เส้นทางอื่น ๆ
    {
        path: '/page',
        name: 'PawnAmount',
        component: PawnAmount,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
