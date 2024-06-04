<template>
  <ul>
    <!-- SongListItem 여러개가 들어간다는 의미 -> v-for을 통해서! -->
    <!-- 우리가 만든 값인 song에 콜론이 붙어있으면? song은 props라는 의미 -->
    <!-- songs를 돌면서 꺼내온 s를 props로 자식에게 전달 -->
    <SongListItem v-for="s in songs" :key="s.id" :song="s" />
  </ul>
  <div>체크된 곡 수 : {{ doneCount }}</div>
</template>

<script>
import SongListItem from './SongListItem.vue';
export default {
  name: 'SongList',
  components: {
    SongListItem,
  },
  //   App.vue의 songs를 props로 받아옴
  props: ['songs'],
  //   provide된 doneCount 값을 주입받음
  inject: ['doneCount'],
};
</script>
