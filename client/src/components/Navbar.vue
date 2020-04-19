<template>
    <v-app-bar
        app
        light
        flat
        elevation="4"
    >
        <div class="d-flex align-center">
            <v-icon color="secondary" left>mdi-twitter</v-icon>
            <h3>
                <span class="primary--text text--lighten-3">Twit</span>
                <span class="secondary--text">Chat</span>
                <span class="secondary--text text--lighten-1">Stream</span>
            </h3>
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
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>