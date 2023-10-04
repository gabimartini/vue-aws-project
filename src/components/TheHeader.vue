<template>
    <ul>
        <li><router-link to="/" v-if="signedUser">Add to do</router-link></li>
        <li><router-link to="/todo" >See all to do</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
    </ul>
</template>

<script>
import { Auth, Hub } from 'aws-amplify';

export default {
    data() {
        return {
            signedUser: false
        }
        
    },
    async created() {
        Hub.listen("auth", (data) => {
        console.log({data})
        switch (data.payload.event) {
            case "signIn":
                return this.signedUser = true
            case "signOut":
                return this.signedUser = false
        }
    })
    try {
        await Auth.currentAuthenticatedUser()
        this.signedUser = true
    }catch(err) {
        { /* empty */ }

    }
    }

}
</script>

<style scoped>
ul {
   list-style: none; 
   display: flex;
   padding: 0;
   border-bottom: 1px solid black;
}
li {
    margin-right: 25px;
}
a{
    text-decoration: none;
    color: black;
    font-weight: bolder;
}
</style>