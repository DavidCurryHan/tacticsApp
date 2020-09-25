<style scoped>
i {
  margin-right:auto !important;
  margin-left:auto !important
}
</style>
<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet
            id="scroll-area-1"
            class="overflow-y-auto"
            max-height="auto"
    >
      <v-main :style="windowSize">
        <router-view></router-view>
      </v-main>
    </v-sheet>

    <v-bottom-navigation
      scroll-target="#scroll-area-1"
      hide-on-scroll
      horizontal
      shift
      absolute
    >
      <v-btn>
        <span>Video</span>
        <v-icon sytle= "margin-right: 0px">mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn>
        <span>Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<!--<template>-->
<!--  <v-app>-->
<!--    <v-app-bar-->
<!--            app-->
<!--            color="primary"-->
<!--            dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--                alt="Vuetify Logo"-->
<!--                class="shrink mr-2"-->
<!--                contain-->
<!--                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--                transition="scale-transition"-->
<!--                width="40"-->
<!--        />-->

<!--        <v-img-->
<!--                alt="Vuetify Name"-->
<!--                class="shrink mt-1 hidden-sm-and-down"-->
<!--                contain-->
<!--                min-width="100"-->
<!--                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--                width="100"-->
<!--        />-->
<!--      </div>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--              href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--              target="_blank"-->
<!--              text-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->

<!--    <v-main>-->
<!--      <keep-alive>-->
<!--        <router-view></router-view>-->
<!--      </keep-alive>-->
<!--    </v-main>-->

<!--    <v-bottom-navigation-->
<!--            v-model="bottomNav"-->
<!--            dark-->
<!--            shift-->
<!--    >-->
<!--      <v-btn>-->
<!--        <span>Video</span>-->
<!--        <v-icon>mdi-television-play</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn>-->
<!--        <span>Music</span>-->
<!--        <v-icon>mdi-music-note</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn>-->
<!--        <span>Book</span>-->
<!--        <v-icon>mdi-book</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn>-->
<!--        <span>Image</span>-->
<!--        <v-icon>mdi-image</v-icon>-->
<!--      </v-btn>-->
<!--    </v-bottom-navigation>-->

<!--  </v-app>-->
<!--</template>-->



<script>

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    bottomNav: 'recent',
  }),
  computed: {
    windowSize() {
      return {
        height: `${window.innerHeight}px`
      }
    }
  }
};
// console.log(window.innerHeight)
</script>
