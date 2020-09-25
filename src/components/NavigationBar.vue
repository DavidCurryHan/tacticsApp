<template>
    <v-card
            class="overflow-hidden mx-auto"
            height="200"
            max-width="500"
    >
        <v-bottom-navigation
                scroll-target="#scroll-area-1"
                hide-on-scroll
                absolute
                horizontal
        >
            <v-btn text color="deep-purple accent-4">
                <span>Recents</span>
                <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn text color="deep-purple accent-4">
                <span>Favorites</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn text color="deep-purple accent-4">
                <span>Nearby</span>
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-bottom-navigation>

        <v-sheet
                id="scroll-area-1"
                class="overflow-y-auto"
                max-height="600"
        >
            <v-container>

            </v-container>
        </v-sheet>
    </v-card>
</template>
<script>
    export default {
        name: "NavigationBar"
    }
</script>

<style scoped>

</style>


