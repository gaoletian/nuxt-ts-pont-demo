<template>
  <v-app :dark="dark" :class="'custom--theme'">
    <v-toolbar app dense class="elevation-1">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- 面包屑导航 -->
      <span class="blue-grey--text">{{breadcrumbs}}</span>
      <v-spacer></v-spacer>
      <v-btn flat icon @click.stop="toggleFullScreen" color="primary">
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-btn flat icon @click.stop="$store.commit('theme/setDark')" color="primary">
        <v-icon>color_lens</v-icon>
      </v-btn>
      <v-menu
        :close-on-content-click="false"
        :nudge-top="-40"
        offset-x
        origin="center center"
        transition="slide-x-transition"
      >
        <v-btn slot="activator" icon color="primary" flat>
          <v-icon>person</v-icon>
        </v-btn>
        <v-card class="pa-3" width="300">
          <v-list v-if="$store.state.user">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{$store.state.user.realName}}</v-list-tile-title>
                <v-list-tile-sub-title>{{$store.state.user.employeeNo}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>favorite</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            <div class="pa-3 pt-0">
              <!-- <v-chip
                color="pink"
                text-color="white"
                v-for="role in roles"
                :key="role"
                @click="$store.commit('RESET_ROLES_TEST', role)"
              >{{role}}</v-chip>-->
            </div>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn block small color="warning" dark @click.stop="logout">注销</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      :right="false"
      :width="220"
      :mini-variant="mini"
    >
      <h2 class="white--text py-3" style="text-align:center;">nuxt-ts-pont-demo</h2>
      <v-list dark>
        <template v-for="item in menu">
          <!-- 有子菜单 -->
          <v-list-group v-if="item.children" :group="item.path" :key="item.icon">
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="child in item.children" :key="child.text" :to="{path: child.path}">
              <v-list-tile-action style="justify-content: center">
                <v-icon>keyboard_arrow_right</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <!-- 没有子菜单 -->
          <v-list-tile v-else :key="item.text" :to="{path: item.path}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- </no-ssr> -->
    <v-content>
      <div class="px-4 pt-3 pb-0">
        <nuxt/>
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { menuConfig } from '~/config/menu.config';
import * as screenfull from 'screenfull';

const mod = namespace('theme');

@Component({
  name: 'default-layout'
})
export default class extends Vue {
  drawer = true;

  @mod.State
  dark;

  mini = false;
  menu = menuConfig();

  get menuFlat() {
    const _array: any[] = [];
    const flat = objArray => {
      objArray.forEach(ele => {
        _array.push({
          path: ele.path,
          text: ele.text
        });
        ele.children && flat(ele.children);
      });
    };
    flat(this.menu);
    return _array;
  }

  /**
   * 计算属性 面包屑导航
   */
  get breadcrumbs() {
    // @ts-ignore
    const { title } = this.$route.matched[0].components.default.options;
    let navigateStack: any[] = [];
    this.menuFlat.forEach(e => {
      this.$route.path.indexOf(e.path) === 0 && navigateStack.push(e.text);
    });
    if (title && title.length && !navigateStack.includes(title)) {
      navigateStack.push(title);
    }

    return navigateStack.join(' > ');
  }

  /**
   * 全屏触发
   */
  toggleFullScreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  async logout() {
    if (await this.$confirm('确定要退出吗？')) {
      const { protocol, host } = window.location;
      this.$store.commit('SET_USER', null);
      await this.$axios.$post('/api/auth/logout');
      const service = encodeURIComponent(`${protocol}//${host}`);
      window.location.assign(`${protocol}//${host}/api/cas/logout?service=${service}`);
    }
  }
}
</script>


