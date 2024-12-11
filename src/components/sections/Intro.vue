<template>
    <section id="intro">
        <header>
            <h2>About</h2>
            <div v-if="data?.summary" v-html="fromMarkdown(data?.summary)"></div>
        </header>
    </section>
</template>

<script setup>
import { useMarkdown } from '../../mixins/markdown';

const { fromMarkdown } = useMarkdown();

const props = defineProps(['data']);
</script>
