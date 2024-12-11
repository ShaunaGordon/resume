<template>
    <section id="projects">
        <header>
            <h2>Projects</h2>
            <p>Due to the nature of my primary work (both technically and legally), I rarely have the luxury of portfolio projects from my paid work. The below samples are projects that I work on in my free time, and therefore may be incomplete or self-contained samples. They should, however, provide an idea of my coding skill and style.</p>
            <p>At any given point in time, I may have other projects that I can demonstrate on an individual basis, but that aren't yet publicly available. They are available upon request after we've had a discussion or two. I'm also willing to do small "take home" projects if desired.</p>
        </header>
        <section class="cardholder">
            <article v-for="(project, i) in projects" class="card" :key="i">
                <header>
                    <h3>{{ project.name }}</h3>
                        <h4 v-if="project.entity">{{ project.entity }}</h4>
                        <h4 v-if="project.startDate">
                            {{ project.startDate }}
                            <span v-if="project.endDate"> - {{ project.endDate }}</span>
                        </h4>
                    <a :href="project.source" target="_blank" v-if="project.source"><i :class="getTechClass('git')"></i> <span>Source Code</span></a>
                </header>
                <section v-if="project.highlights">
                    <ul class="highlights">
                        <li v-for="(item, i) in project.highlights" :key="i" v-html="fromInlineMarkdown(item)">
                        </li>
                    </ul>
                </section>
                <section v-if="project.tech">
                    <ul class="tech">
                        <li v-for="(t, i) in project.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section>
                    <details>
                        <summary>More Information</summary>
                        <div v-html="fromMarkdown(project.description)"></div>
                    </details>
                </section>
            </article>
        </section>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

import { useMarkdown } from '../../mixins/markdown';
import { useIcons } from '../../mixins/icons';

const { fromMarkdown, fromInlineMarkdown } = useMarkdown();
const { getTechClass } = useIcons();

const { projects } = defineProps(['projects']);
</script>
