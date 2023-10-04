<template>
    <h1>Add your duties</h1>
    <form @submit.prevent="addDuty">
        <input type="text" id="title" name="title" placeholder="Title" @change="addTitle"/>
        <input type="text" id="description" placeholder="Description" @change="addDescription"/>
        <input type="text" id="dateExpired" placeholder="Date Expired" @change="addExpiredDate"/>
        <button>Add new duties</button>
    </form>
</template>

<script>
    import { API } from "aws-amplify";
import {createTodo} from "../graphql/mutations";

    export default {
        data() {
            return {
                title: "",
                description: "",
                expiredDate: ""
            }
        },
        methods: {
            addTitle(e) {
                this.title = e.target.value
            },
            addDescription(e) {
                this.description = e.target.value
            },
            addExpiredDate(e) {
                this.expiredDate = e.target.value
                console.log(e.target.value)
            },
            async addDuty() {
                const input = {name: this.title, description: this.description, expiredDate: this.expiredDate}
                console.log({input})
                await API.graphql({
                    query: createTodo,
                    variables: {input}
                })
            }
        }
    }

</script>

<style scoped>
h1 {
    text-align: center;
}
input {
    height: 30px;
    border:1px solid black;
    border-radius: 5px;
}
form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    margin-top: 40px;
}
button {
    border: 2px solid blue;
    background-color: blue;
    border-radius: 5px;
    color: white;
    height: 30px;
}
</style>