import { InjectionKey } from "vue"
import { loadModules, context, modules } from "./modules/index.js"
import { createStore, useStore as baseUseStore, Store, createLogger } from "vuex"

export interface State {}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
    modules,
    strict: true,
    plugins: [createLogger()]
});

export function useStore() {
    return baseUseStore(key);
}

// 热重载
if (import.meta.hot) {
    import.meta.hot?.accept(Object.keys(context), () => {
        const { modules } = loadModules()
        store.hotUpdate({
            modules
        })
    })
}

// export default store;