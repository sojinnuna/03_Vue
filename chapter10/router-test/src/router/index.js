import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import Videos from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 무조건 로딩되어야 하는 페이지기 때문에 정적으로 처리
    {
      path: '/',
      component: Home,
    },
    {
      // About로 접속하면 About로 연결
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 해당 경로가 방문됐을때만 로딩되게 만들어둠, 화삼표함수로 처리
      component: About,
    },
    {
      path: '/members',
      component: Members,
    },
    {
      path: '/videos',
      component: Videos,
    },
  ],
});
// router 만든후 내보내기
export default router;
