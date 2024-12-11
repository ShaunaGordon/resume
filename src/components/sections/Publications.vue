<template>
    <section id="publications">
        <header>
            <h2>Talks &amp; Publications</h2>
            <p>I like to write about the things I do and share what I know and learn with others. Aside from my own blog, I occassionally have articles in other publications.</p>
            <p>Very occassionally, I also do a little public speaking. The slide decks are linked here, unless a video is available.</p>
        </header>
        <section class="cardholder">
            <article v-for="(pub, i) in publications" class="card" :key="i">
                <header>
                    <h3>{{ pub.name }}</h3>
                    <a :href="pub.url" target="_blank"><h4>{{ pub.publisher }} - {{ pub.releaseDate }}</h4></a>
                </header>
                <section v-if="pub.tech">
                    <ul class="tech">
                        <li v-for="(t, i) in pub.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section v-html="fromMarkdown(pub.summary)">
                </section>
            </article>
        </section>
    </section>
</template>

<script setup>
import { useIcons } from '../../mixins/icons';
import { useMarkdown } from '../../mixins/markdown';

const { getTechClass } = useIcons();
const { fromMarkdown } = useMarkdown();

const props = defineProps(['publications']);

</script>
