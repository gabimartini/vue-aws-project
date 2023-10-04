<template>
    <div>
        <p>Title: <span>{{ title }}</span></p>
        <p>Description: <span>{{ description }}</span></p>
        <p>Expired Date: <span>{{ expiredDate }}</span></p>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', "expiredDate"]
}
</script>

<style scoped>
    div {
        border: 1px solid gray;
        border-radius: 5px;
        margin-top: 15px;
    }
    p {
        font-weight: bolder;
    }
</style>