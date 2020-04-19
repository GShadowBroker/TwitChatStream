<template>
    <v-col class="col-12">
        
        <v-card
            class="mx-auto"
            color="#26c6da"
            dark
            max-width="800"
            small
            :href="`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`"
            target="_blank"
            transition="slide-x-transition"
        >
            <v-card-title>
                <v-list-item class="grow">
                    <v-list-item-avatar color="grey lighten-2">
                        <v-img
                            class="elevation-6"
                            :src=tweet.user.profile_image_url
                        ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="d-flex justify-space-between">
                            <span>{{ tweet.user.name }}</span>
                            <span>{{ created_at }}</span>
                        </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-card-title>

            <v-card-text class="font-weight-bold">
                {{ tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text }}
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import moment from 'moment'

export default {
    props: ['tweet'],
    name: 'Comment',
    data () {
        return {
            created_at: moment(this.tweet.created_at).format('DD/MM/YYYY HH:mm')
        }
    }
}
</script>

<style>

</style>