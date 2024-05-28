<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <!-- name과 checked는 자식한테 props로 전달해주는 속성 (사용자 정의) -->
      <!-- idols 배열은 돌면서 idol이라는 이름으로 객체 하나씩 접근 -->
      <CheckboxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul>
  </div>
</template>

<script>
// 지역 컴포넌트 등록 방법 (사용할 파일애서만 명시)
import CheckboxItem from './components/checkboxItem.vue';
export default {
  name: 'App',
  components: { CheckboxItem },
  data() {
    return {
      // idols를 객체 배열로 만들어줌
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Blank Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },
      ],
    };
  },
};
</script>
