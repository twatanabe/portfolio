import Vue from "vue";
import { Store } from "vuex";
import { Route } from 'vue-router';

// ComponentOptions is declared in types/options.d.ts
declare module "vue/types/options" {
  interface NuxtContext<V extends Vue> {
    app: V;
    isClient: boolean;
    isServer: boolean;
    isStatic: boolean;
    isDev: boolean;
    store: Store<any>; // Consider vuex-typex in future
    env: object;
    params: object;
    query: object;
    route: Route;
    // err: any;
    payload: any;
    $axios: any;
  }

  interface ComponentOptions<V extends Vue> {
    asyncData?(context: NuxtContext<V>): Promise<object> | object;
    watchQuery?: boolean | string[];
  }
}
