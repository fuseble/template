<template>
  <div class="home">
    <p>{{ counter }}</p>
    <div>
      <button @click="increaseCounter">+</button>
      <button @click="decreaseCounter">-</button>
    </div>

    <Button
      text="text"
      :counter="this.counter"
      :class="{ isSelected: true }"
      @click="increaseCounter"
    ></Button>

    <h1 v-if="isLoading === true">Loading...</h1>

    <ul class="todoList">
      <li
        class="todoItem"
        v-bind:class="{
          isSelected: selectedTodo?.id === todo.id,
          isCompleted: todo.completed,
        }"
        v-for="todo in todos"
        :key="todo.id"
        @click="() => handleSelectedTodo(todo)"
      >
        {{ todo.id }}: {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@/components";
import useTodo from "@/stores/useTodo";

export default defineComponent({
  name: "page-home",
  components: { Button },
  computed: {
    userData() {
      return this.$store.state.user.data;
    },
    selectedTodo() {
      return this.$store.state.selectedTodo;
    },
    globalTodos() {
      return this.$store.state.todos;
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  setup() {
    return useTodo();
  },
  methods: {
    handleSelectedTodo(todo: any) {
      this.$store.commit("setSelectedTodo", todo);
    },
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
});
</script>

<style lang="scss">
@import "./home.scss";
</style>
