import { Module } from "vuex";
import { defaultRoutes } from '@/router'
  /**
   * Filter asynchronous routing tables by recursion
   * @param routes asyncRoutes
   * @param roles
   */
  export function filterAsyncRoutes(routes: any) {
    const res:any = []
    routes.forEach((route: any) => {
      const tmp = { ...route }
        if (tmp.children) {
          tmp.children = filterAsyncRoutes(tmp.children)
        }
        res.push(tmp)
    })
    return res
  }
interface StoreRouter {
    routers: any
}

const store: Module<StoreRouter, unknown> = {
    namespaced: true,
    state() {
        return {
            routers: []
        }
    },
    mutations: {
        setRouter(state: StoreRouter, payload: any) {
            state.routers = payload;
        }
    },
    actions: {
        setRouter(context, payload: any) {
            let accessedRoutes
            accessedRoutes = filterAsyncRoutes(payload)
            context.commit("setRouter", accessedRoutes);
            return accessedRoutes
            
        }
    },
    getters: {
        getRouter(state: StoreRouter) {
            return state.routers
        }
    }
}

export default store