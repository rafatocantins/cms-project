<template>
    <v-navigation-drawer
            v-model="drawer"
            app
    >
        <v-list dense>
            <v-list-item @click="">
                <v-list-item-action>
                    <v-icon>fa-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item @click="">
                <v-list-item-action>
                    <v-icon>fa-phone</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Contact</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
            drawer: {
                required: true,
                type: Boolean
            }
        },
    };
</script>
