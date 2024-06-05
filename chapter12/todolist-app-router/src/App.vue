<template>
  <div class="container">
    <Header />
    <!-- 계속 페이지가 바뀌는 부분이 router-view -->
    <router-view />
    <!-- <Loading v-if="states.isLoading" /> -->
  </div>
</template>

<script setup>
// script setup 키워드 사용시 components 따로 등록할 필요 없음
import Header from '@/components/Header.vue';
import { reactive, computed, provide } from 'vue';
import Loading from '@/components/Loading.vue';
import axios from 'axios';

const BASEURI = '/api/todos';

// 객체 안에 배열 안에 키값 왜 reactive? 참조형 데이터니깐 객체니깐
const states = reactive({
  todoList: [],
});
// TodoList 목록 조회하는 메소드
const fetchTodoList = async () => {
  states.isLoading = true;
  // try~catch 문: 예외 처리 구문
  // try: 예의가 발생할 수 있는 문장을 넣는다
  try {
    const response = await axios.get(BASEURI);
    // 서버에서 데이터를 가져올때 시간이 걸리기 때문에 await로 비동기 처리
    // status가 200인건 요청이 성공적으로 이루어졌다는 뜻
    if (response.status === 200) {
      states.todoList = response.data;
    } else {
      alert('데이터 조회 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
};

// todo를 추가하는 메소드, todo와 desc가 들어있는 객체를 구조 분해 할당으로 받음
const addTodo = async ({ todo, desc }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { todo, desc };
    const response = await axios.post(BASEURI, payload);
    if (response.status === 201) {
      states.todoList.push({ ...response.data, done: false });
      successCallback();
    } else {
      alert('Todo 추가 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
};

const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
  states.isLoading = true;
  try {
    const payload = { id, todo, desc, done };
    const response = await axios.put(BASEURI + `/${id}`, payload);
    if (response.status === 200) {
      let index = states.todoList.findIndex((todo) => todo.id === id);
      states.todoList[index] = payload;
      successCallback();
    } else {
      alert('Todo 변경 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error.message);
  }
  states.isLoading = false;
};

const deleteTodo = async (id) => {
  states.isLoading = true;

  try {
    const response = await axios.delete(BASEURI + `/${id}`);
    console.log(response.status, response.data);
    if (response.status === 200) {
      let index = states.todoList.findIndex((todo) => todo.id === id);
      states.todoList.splice(index, 1);
    } else {
      alert('Todo 삭제 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
};

const toggleDone = async (id) => {
  states.isLoading = true;
  try {
    // 받아온 id로 해당하는 todo를 찾아옴
    let todo = states.todoList.find((todo) => todo.id === id);
    // todo 값을 그대로 가져오고 done 값만 반대로 변경해줌 (index를 가져오는 게 아님)
    let payload = { ...todo, done: !todo.done };
    // done이 변경됐으므로 해당 아이디의 todo를 업데이트해줌
    const response = await axios.put(BASEURI + `/${id}`, payload);
    if (response.status === 200) {
      // todo.done을 payload.done으로 변경해줌
      todo.done = payload.done;
    } else {
      alert('Todo 완료 변경 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
  states.isLoading = false;
};

provide(
  'todoList',
  computed(() => states.todoList)
);
provide('actions', {
  addTodo,
  deleteTodo,
  toggleDone,
  updateTodo,
  fetchTodoList,
});
// fetchTodoList로 갱신
// 전체 목록 갱신
fetchTodoList();
</script>
