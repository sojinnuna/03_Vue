<template>
  <div>
    <!-- 자식 컴포넌트에서 정의한 nameChanged 이벤트를 nameChangedHandler 함수와 연결 -->
    <!-- (사용자 정의 이벤트) -->
    <Inputname @nameChanged="namechangedHandeler" />
    <br />
    <h3>App 데이터: {{ parentName }}</h3>
  </div>
</template>

<script>
// 지역 컴포넌트 등록 방법 (사용할 파일애서만 명시)
// from과 components 요소는 짝궁임
import InputName from './components/InputName.vue';
export default {
  name: 'App',
  components: { InputName },
  data() {
    return {
      parentName: '',
    };
  },
  methods: {
    nameChangeHandeler(e) {
      // 받아옴객체 안에 있는 name을 접근해서 data에 있는 parentName에 넣어줌
      this.parentName = e.name;
    },
  },
};
</script>
