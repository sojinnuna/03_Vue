<template>
  <div>
    X: <input type="text" v-model.number="x" /><br />
    Y: <input type="text" v-model.number="y" /><br />
    <!-- calcAdd는 함수, result는 변수 -->
    <button @click="clacAdd">계산</button><br />
    <div>결과: {{ result }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc',
  setup() {
    // ref로 값형 데이터를 감싸줘야 반응형으로 동작한다
    // 기존 옵션 API의 data와 같은 역할
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);
    // 함수를 변수처럼 쓸 수 있음
    // 빈 함수를 넣어줌?
    // ref 데이터 내의 값에 접근할 때는 무조건 .value를 붙여야 한다
    const calcAdd = () => {
      result.value = x.value + y.value;
    };
    // return을 해줘야 template 쪽에서 사용 가능
    return { x, y, result, calcAdd };
  },
};
</script>
