<template>
  <div>
    <h3>당신이 경험한 프론트엔드 기술은? (두번째: Slot 사용(x))</h3>
    <!-- item 배열을 순회하면서 자식의 props에 해당 값들을 넘겨준다 -->
    <!-- 자식에서 보낸 check-changed 이벤트에 CheckBoxChanged 함수 연결 -->
    <CheckBox2
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :label="item.label"
      :checked="item.checked"
      @check-changed="CheckBoxChanged"
    >
      <template v-slot:icon>
        <!-- 체크박스의 체크여부에 따라 다른 아이콘 출력 -->
        <i v-if="item.checked" class="far fa-grin-beam"></i>
        <i v-else="item.checked" class="far fa-frown"></i>
      </template>

      <template v-slot:label>
        <!-- 체크박스의 체크여부에 따라 다른 스타일 적용 -->
        <span
          v-if="item.checked"
          style="color: blue; text-decoration: underline"
          ><i>{{ item.label }}</i></span
        >
        <span v-else style="color: gray">{{ item.label }}</span>
      </template>
    </CheckBox2>
  </div>
</template>

<script>
import CheckBox2 from './CheckBox2.vue';

export default {
  name: 'SlotTest',
  components: { CheckBox2 },
  data() {
    return {
      items: [
        { id: 'V', checked: true, label: 'Vue' },
        { id: 'A', checked: false, label: 'Angular' },
        { id: 'R', checked: false, label: 'React' },
        { id: 'S', checked: false, label: 'Svelte' },
      ],
    };
  },
  // 변경된 체크박스의 id로 현재 items 배열에서 해당 요소를 찾는다.
  methods: {
    CheckBoxChanged(e) {
      let item = this.items.find((item) => item.id === e.id);
      // 해당 아이템의 checked 값을 받아온 값으로 변경
      item.checked = e.checked;
    },
  },
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
</style>
