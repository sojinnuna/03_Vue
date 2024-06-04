<template>
  <li>
    <!-- song의 done이 true면 icons의 checked 내에 있는 값으로 클래스 지정 -->
    <!-- 클론을 통해서, class가 어딘가 바인딩되어있음을 파악해야함 -->
    <i :class="song.done ? icons.checked : icons.unchecked"></i>
    {{ song.title }}
  </li>
</template>

<script>
export default {
  name: 'SongListItem',
  // 부모에서 provide한 항목을 inject로 가져올 수 있다
  inject: ['icons'],
  props: ['song'],
};
</script>
