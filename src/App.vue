<script setup lang="ts">
// import { reactive } from "vue";
</script>

<template>
    <div>
        <ivy-tag type="primary">tag</ivy-tag>
        <ivy-tag type="success">tag</ivy-tag>
        <ivy-tag type="warning">tag</ivy-tag>
        <ivy-tag type="danger">tag</ivy-tag>
        <ivy-tag type="info">tag</ivy-tag>
    </div>
    <div class="margin-top">
        <ivy-tag type="primary">tag</ivy-tag>
        <ivy-tag type="success">tag</ivy-tag>
        <ivy-tag type="warning">tag</ivy-tag>
        <ivy-tag type="danger">tag</ivy-tag>
        <ivy-tag type="info">tag</ivy-tag>
    </div>
    <div class="margin-top">
        <ivy-tag type="primary" theme="dark">tag</ivy-tag>
        <ivy-tag type="success" theme="dark">tag</ivy-tag>
        <ivy-tag type="warning" theme="dark">tag</ivy-tag>
        <ivy-tag type="danger" theme="dark">tag</ivy-tag>
        <ivy-tag type="info" theme="dark">tag</ivy-tag>
    </div>
    <div class="margin-top">
        <ivy-tag type="primary" theme="plain">tag</ivy-tag>
        <ivy-tag type="success" theme="plain">tag</ivy-tag>
        <ivy-tag type="warning" theme="plain">tag</ivy-tag>
        <ivy-tag type="danger" theme="plain">tag</ivy-tag>
        <ivy-tag type="info" theme="plain">tag</ivy-tag>
    </div>
    <div class="margin-top">
        <ivy-tag type="primary" size="mini">tag</ivy-tag>
        <ivy-tag type="primary" size="small">tag</ivy-tag>
        <ivy-tag type="primary" size="medium">tag</ivy-tag>
        <ivy-tag type="primary" size="large">tag</ivy-tag>
    </div>
    <ivy-tag type="primary" size="large" closable>tag</ivy-tag>
</template>

<style scoped>
.margin-top {
    margin-top: 24px;
}
</style>
