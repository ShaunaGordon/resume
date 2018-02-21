<template>
    <section id="experience">
        <header>
            <h2>Experience</h2>
            <p>This provides the most recent history. For a full employment history, <a href="https://www.linkedin.com/in/gordondev/">see my LinkedIn profile</a>.</p>
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
                <section class="info" v-html="job.info">
                </section>
            </article>
        </section>
        <footer>

        </footer>
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
                    <p><strong>Note:</strong> BVAccel bought Rocket Code in October 2017, making my job title and employer change, but not my job.</p>
                    `
                },
                {
                    title: 'Back-End Engineer',
                    company: 'Rocket Code',
                    dates: 'October 2016 - October 2017',
                    tech: {
                        php: 'PHP',
                        laravel: 'Laravel',
                        mysql: 'MySQL',
                        redis: 'Redis',
                        javascript: 'ES6',
                        nodejs: 'Node/Yarn',
                        vuejs: 'VueJS',
                        bitbucket: 'Bitbucket',
                        docker: 'Docker',
                        ubuntu: 'Linux',
                        nginx: 'Nginx',
                        ansible: 'Ansible'
                    },
                    info: `
                    <ul>
                        <li>Worked closely with Front-End Engineers to expand Shopify’s capabilities</li>
                        <li>Built custom API-based integrations between platforms</li>
                        <li>Wrote Ruby-based Shopify checkout and line item scripts to modify cart behavior</li>
                        <li>Used queue systems to handle imports of large datasets into Shopify and other APIs</li>
                        <li>Planned and documented API endpoints using Swagger/OpenAPI</li>
                        <li>Piloted new techniques, technologies, and learning resources for the team</li>
                        <li>Provided culture guidance/feedback to CEO during acquisition of Rocket Code by BVAccel</li>
                    </ul>
                    `
                },
                {
                    title: 'Developer, GoExpo Division',
                    company: 'Core-Apps',
                    dates: 'April 2014 - December 2015',
                    tech: {
                        php: 'PHP',
                        laravel: 'Laravel',
                        mysql: 'MySQL',
                        javascript: 'JavaScript',
                    },
                    info: `
                    <ul>
                        <li>Primarily server-side development using PHP, with some front-end development.</li>
                        <li>Help lead developer maintain, improve, and refactor flagship PHP application. Provide input on refactoring path and decisions. Support other employees and users by troubleshooting and fixing bugs or user issues.</li>
                        <li>Employ PHPUnit and structured refactoring methods to bring legacy code under test and using modern code and architecture techniques. Start the conversion of the old SOAP API to a REST API, by retrofitting part of the existing system with the Laravel framework.</li>
                    </ul>
                    `
                },
                {
                    title: 'Developer',
                    company: 'Fahlgren Mortine',
                    dates: 'October 2012 - March 2014',
                    tech: {
                        php: 'PHP',
                        laravel: 'Laravel',
                        mysql: 'MySQL',
                        git: 'Git',
                        sass: 'Sass',
                        ubuntu: 'Linux',
                        apache: 'Apache2',
                        jquery: 'jQuery',
                        bootstrap: 'Bootstrap',
                        'dot-net': '.NET'
                    },
                    info: `
                    <ul>
                        <li>Full-stack development for clients using a variety of technologies</li>
                        <li>Provided scope, time estimation, planning advice, and ongoing support for client projects</li>
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