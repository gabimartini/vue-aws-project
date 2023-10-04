
<template>
    <h1>Your Duties</h1>
    <to-do-list
    v-for="todo in todoList"
    :id="todo.id"
    :key="todo.id"
    :title="todo.name"
    :description="todo.description"
    :expiredDate="todo.expiredDate"
    ></to-do-list>
</template>

<script>
import { API } from 'aws-amplify';
import {listTodos} from "../graphql/queries";
import ToDoList from './ToDoList.vue';

export default {
    components: {
        ToDoList
    },
    data() {
        return {
            todoList: []
        }
    },
    async created() {
        const res = await API.graphql({
               query: listTodos
            });
            this.todoList = res.data.listTodos.items
            console.log(res.data.listTodos.items)
    },
}
</script>