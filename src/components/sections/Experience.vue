<template>
    <section id="experience">
        <header>
            <h2>Experience</h2>
        </header>
        <section class="cardholder">
            <article v-for="job in jobs" class="card">
                <header>
                    <h3>{{ job.title }}</h3>
                    <h4>{{ job.company }}</h4>
                    <h4>{{ job.dates }}</h4>
                </header>
                <section>
                    <ul class="tech">
                        <li v-for="(t, i) in job.tech"><i :class="getClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section v-html="job.info">
                </section>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'Senior Back-End Engineer',
                    company: 'BVAccel',
                    dates: 'October 2017 - February 2018',
                    tech: {
                        php: 'PHP',
                        laravel: 'Laravel',
                        mysql: 'MySQL',
                        redis: 'Redis',
                        javascript: 'ES6',
                        nodejs: 'Node/Yarn',
                        vuejs: 'VueJS',
                        github: 'GitHub',
                        docker: 'Docker',
                        ubuntu: 'Linux',
                        nginx: 'Nginx'
                    },
                    info: `
                    <ul>
                        <li>Worked closely with Front-End Engineers to expand Shopify’s capabilities</li>
                        <li>Built custom API-based integrations between platforms</li>
                        <li>Wrote Ruby-based Shopify checkout and line item scripts to modify cart behavior</li>
                        <li>Used queue systems to handle imports of large datasets into Shopify and other APIs</li>
                        <li>Planned and documented API endpoints using Swagger/OpenAPI</li>
                        <li>Piloted new techniques, technologies, and learning resources for the team</li>
                        <li>Provided culture guidance/feedback to CEO during acquisition of Rocket Code</li>
                    </ul>
                    `
                }
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
.card h3 {
    margin-bottom: .5rem;
}

.card h4 {
    margin: 0;
    opacity: .6;
}
</style>
