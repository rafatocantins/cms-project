<template>
    <v-content class="HomeView">
        Hello world
        <router-link to="/login">Login</router-link>
    </v-content>
</template>

<script>
    import './_HomeView.scss'
    export default {
        name: 'HomeView',
        props: {
        },
    };
</script>
