import { Vue } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import '@nuxt/vue-app/types';
import { apitype } from '~/api';
import { Store } from 'vuex';
import { NuxtCookies } from 'cookie-universal-nuxt';
interface VuetifyConfirm {
  (msg: string): Promise<boolean>;
  (msg: string, options: { title?: string }): Promise<boolean>;
}

declare module 'vue/types/vue' {
  interface Vue {
    $confirm: VuetifyConfirm;
    $axios: Nuxt.AxiosInstance;
    $api: apitype;
    $store: Store<any>;
    $cookies: NuxtCookies;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    link?: any;
    // auth  false 表示不需要鉴权，默认全部鉴权
    auth?: boolean;
    // 页面顶部导航 > 最后要显示的页面路径， 默认不显示, 根据菜父子关系自动显示
    title?: string;
    store?: Store<any>;
  }
}
