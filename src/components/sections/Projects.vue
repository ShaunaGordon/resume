<template>
    <section id="projects">
        <header>
            <h2>Projects</h2>
            <p>Due to the nature of my primary work (both technically and legally), I don't have the luxury of portfolio projects from my paid work. The below samples are projects that I work on in my free time, and therefore may be incomplete. They should, however, provide an idea of my coding skill and style.</p>
        </header>
        <section class="cardholder">
            <article v-for="project in projects" class="card">
                <header>
                    <h3>{{ project.name }}</h3>
                    <a :href="project.source"><i class="icon devicon-github-plain"></i> <span>Source Code</span></a>
                </header>
                <section>
                    <ul class="tech">
                        <li v-for="(t, i) in project.tech"><i :class="getClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section v-html="project.info">
                </section>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: 'This Page!',
                    tech: {
                        javascript: 'ES6',
                        nodejs: 'Node/Yarn',
                        vuejs: 'VueJS',
                        d3js: 'D3',
                        html5: 'HTML5',
                        css3: 'CSS3',
                        travis: 'TravisCI',
                        webpack: 'Webpack'
                    },
                    source: 'https://github.com/ShaunaGordon/resume',
                    info: `<p>This very page is a portfolio piece, used to demonstrate some of the front-end work that I do. While I prefer letting dedicated Front-End Engineers and Designers make things look good and be usable, I do like to keep my front-end skills up to date (at least reasonably so), so I can dive into front-end tasks when needed.</p>
                        <p>This online resume is built on VueJS, using Webpack for building and Babel for transpiling ES6, and D3 for creating the charts. It's then built with Yarn, via TravisCI, and deployed to GitHub Pages. </p>
                    `
                },
                // {
                //     name: "Soaper's Friend",
                //     tech: {
                //         ruby: 'Ruby',
                //         rails: 'Rails',
                //         docker: 'Docker'
                //     },
                //     source: 'https://github.com/ShaunaGordon/soapers-friend',
                //     info: `<p>Soaper's Friend is intended to be a multi-platform application for soapmakers to track inventory, starting with a Rails web app.</p>
                //     `
                // }
            ]
        }
    },
    methods: {
        getClass(i) {
            return `icon devicon-${i}-plain`;
        }
    }
}
</script>

<style scoped>
a span {
    border-bottom: 1px dotted;
}
</style>
