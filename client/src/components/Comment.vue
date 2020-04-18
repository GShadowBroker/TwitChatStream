<template>
    <v-col>{{ tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text }}</v-col>
</template>

<script>
export default {
    props: ['tweet'],
    name: 'Comment'
}
</script>

<style>

</style>