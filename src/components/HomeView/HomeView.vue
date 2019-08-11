<template>
    <v-layout
            align-center
            justify-center
    >
        <v-flex text-center>
            <v-tooltip left>
                <template v-slot:activator="{ on }">
                    <v-btn
                            :href="source"
                            icon
                            large
                            target="_blank"
                            v-on="on"
                    >
                        <v-icon large>mdi-code-tags</v-icon>
                    </v-btn>
                </template>
                <span>Source</span>
            </v-tooltip>

            <v-tooltip right>
                <template v-slot:activator="{ on }">
                    <v-btn
                            icon
                            large
                            href="https://codepen.io/johnjleider/pen/zgxeLQ"
                            target="_blank"
                            v-on="on"
                    >
                        <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                </template>
                <span>Codepen</span>
            </v-tooltip>
        </v-flex>
    </v-layout>
</template>

<script>
    import './_HomeView.scss'
    export default {
        name: 'HomeView',
        props: {
        },
    };
</script>
