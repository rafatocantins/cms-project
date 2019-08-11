<template>
  <v-app id="inspire">
    <Menu :drawer="drawer"></Menu>
    <v-app-bar
            app
            color="indigo"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
              fluid
              fill-height
      >
        <router-view></router-view>
      </v-container>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>

import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'

export default {
  name: 'App',
  components: {
    Footer,
    Menu,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
