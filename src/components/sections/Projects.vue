<template>
    <section id="projects">
        <header>
            <h2>Projects</h2>
            <p>Due to the nature of my primary work (both technically and legally), I don't have the luxury of portfolio projects from my paid work. The below samples are projects that I work on in my free time, and therefore may be incomplete. They should, however, provide an idea of my coding skill and style.</p>
            <p>At any given point in time, I may have other projects that I can demonstrate on an individual basis, but that aren't yet publicly available. They are available upon request after we've had a discussion or two. I'm also willing to do small "take home" projects if desired.</p>
        </header>
        <section class="cardholder">
            <article v-for="(project, i) in projects" class="card" :key="i">
                <header>
                    <h3>{{ project.name }}</h3>
                    <a :href="project.source" target="_blank"><i class="icon devicon-github-plain"></i> <span>Source Code</span></a>
                </header>
                <section>
                    <ul class="tech">
                        <li v-for="(t, i) in project.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section v-html="project.info">
                </section>
            </article>
        </section>
    </section>
</template>

<script>
import icons from '../../mixins/icons';

export default {
    mixins: [icons],
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
                {
                    name: 'ROWE Jobs',
                    tech: {
                        php: 'PHP',
                        laravel: 'Laravel',
                        docker: 'Docker',
                        webpack: 'Webpack',
                        vuejs: 'VueJS',
                        javascript: 'ES6',
                        html5: 'HTML5',
                        css3: 'CSS3',
                        less: 'Less CSS'
                    },
                    source: 'https://gitlab.com/rowe-jobs/rowe-jobs',
                    info: `<p>ROWE Jobs is a niche job board, specifically for companies who embrace the Results-Only Work Environment philosophy.</p>
                    <p>This project is built in PHP7 and Laravel 5, with VueJS (with Webpack, Babel, and Yarn, like this resume page, plus Jest for component testing), and a specific focus on building it using <abbr title="Test-Driven Development">TDD</abbr> practices.</p>
                    `
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped>
a span {
    border-bottom: 1px dotted;
}
</style>
