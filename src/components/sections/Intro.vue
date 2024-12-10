<template>
    <section id="intro">
        <header>
            <h2>About</h2>
            <div v-if="data?.summary" v-html="toMarkdown(data?.summary)"></div>
        </header>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';
import { useMarkdown } from '../../mixins/markdown';

const { toMarkdown } = useMarkdown();

const props = defineProps(['data']);
</script>
