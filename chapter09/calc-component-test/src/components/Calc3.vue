<template>
  <div>
    X: <input type="text" v-model.number="state.x" /><br />
    Y: <input type="text" v-model.number="state.y" /><br />
    <!-- calcAdd는 함수, result는 변수 -->
    <button @click="clacAdd">계산</button><br />
    <div>결과: {{ state.result }}</div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Calc',
  setup() {
    const state = reactive({ x: 10, y: 20, result: 30 });
    // 참조형 데이터는 .value로 접근할 필요 없다
    const calcAdd = () => {
      state.value = state.x + state.y;
    };
    // return을 해줘야 template 쪽에서 사용 가능
    return { state, calcAdd };
  },
};
</script>
