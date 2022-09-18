import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

type UserData = any;

type RootState = {
  user: {
    data?: UserData;
    accessToken?: string;
    refreshToken?: string;
  };
  todos: any[];
  selectedTodo?: any;
};

const initialState: RootState = {
  user: {
    data: undefined,
    accessToken: undefined,
    refreshToken: undefined,
  },
  todos: [],
  selectedTodo: undefined,
};

export const key: InjectionKey<Store<RootState>> = Symbol();

declare module "@vue/runtime-core" {
  // declare your own store states
  type State = RootState;

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

const store = createStore<RootState>({
  state: initialState,
  mutations: {
    setUser(state, user: UserData) {
      state.user.data = user;
    },
    setAccessToken(state, accessToken: string) {
      state.user.accessToken = accessToken;
    },
    setRefreshToken(state, refreshToken: string) {
      state.user.refreshToken = refreshToken;
    },
    setTodos(state, todos: any[]) {
      state.todos = todos;
    },
    setSelectedTodo(state, todo: any) {
      state.selectedTodo = todo;
    },
  },
  actions: {
    setUserAsync: ({ commit }, user: UserData) => {
      setTimeout(() => {
        commit("setUser", user);
      }, 500);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
