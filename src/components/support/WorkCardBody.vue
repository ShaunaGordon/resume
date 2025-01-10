<template>
    <section v-if="item.highlights">
        <ul class="highlights">
            <li v-for="(item, i) in item.highlights" :key="i" v-html="fromInlineMarkdown(item)">
            </li>
        </ul>
    </section>
    <section v-if="item.tech">
        <ul class="tech">
            <li v-for="(t, i) in item.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
        </ul>
    </section>
    <section v-if="item.description">
        <details>
            <summary v-if="item.summary" v-html="fromInlineMarkdown(item.summary)"></summary>
            <summary v-else>More Information</summary>
            <div v-html="fromMarkdown(item.description)"></div>
        </details>
    </section>
</template>

<script setup>
import { useIcons } from '../../mixins/icons';
import { useMarkdown } from '../../mixins/markdown';

const { getTechClass } = useIcons();
const { fromMarkdown, fromInlineMarkdown } = useMarkdown();

const { item } = defineProps(['item']);
</script>
