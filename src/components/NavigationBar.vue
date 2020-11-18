<template>
    <v-bottom-navigation
    horizontal
    absolute
    >
        <v-btn>
            <span>Composition</span>
            <v-icon sytle= "margin-right: 0px">mdi-account-group</v-icon>
        </v-btn>

        <v-btn>
            <span>Champion</span>
            <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn>
            <span>Item</span>
            <v-icon>mdi-knife-military</v-icon>
        </v-btn>

        <v-btn>
            <span>Patch Note</span>
            <v-icon>mdi-calendar-text-outline</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>

</style>



 <!-- this is for hiden navbar
    <v-bottom-navigation
      scroll-target="#scroll-area-1"
      hide-on-scroll
      horizontal
      shift
      absolute
    >
      <v-btn>
        <span>Composition</span>
        <v-icon sytle= "margin-right: 0px">mdi-account-group</v-icon>
      </v-btn>

      <v-btn>
        <span>Champion</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn>
        <span>Item</span>
        <v-icon>mdi-knife-military</v-icon>
      </v-btn>

      <v-btn>
        <span>Patch Note</span>
        <v-icon>mdi-calendar-text-outline</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
