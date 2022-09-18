import { toRaw, toRefs } from "vue";
import axios from "axios";
import { useQuery } from "vue-query";
import { useStore } from "@/stores";

const useTodo = () => {
  const { commit } = useStore();
  const { data, isLoading, isFetched, ...rest } = useQuery("todos", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data)
  );

  if (isFetched) {
    commit("setTodos", data);
  }

  return {
    todos: data,
    isLoading,
    isFetched,
    ...rest,
  };
};

export default useTodo;
