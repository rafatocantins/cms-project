<template>
    <v-content Login>
        <LoginForm></LoginForm>
    </v-content>
</template>

<script>
    import './_Login.scss'
    import  LoginForm from './LoginForm/LoginForm'
    export default {
        name: 'Login',
        props: {
        },
        components: { LoginForm }
    };
</script>
