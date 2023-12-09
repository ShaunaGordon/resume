<template>
    <section id="experience">
        <header>
            <h2>Experience</h2>
            <p>This provides the most recent history. For a full employment history, <a href="https://www.linkedin.com/in/gordondev/" target="_blank">see my LinkedIn profile</a>.</p>
        </header>
        <section class="cardholder">
            <article v-for="(job, i) in jobs" class="card" :key="i">
                <header>
                    <h3>{{ job.title }}</h3>
                    <h4>{{ job.company }}</h4>
                    <h4>{{ job.dates.start }} - {{ job.dates.end }}</h4>
                </header>
                <section>
                    <ul class="tech">
                        <li v-for="(t, i) in job.tech" :key="i"><i :class="getTechClass(i)"></i> {{ t }}</li>
                    </ul>
                </section>
                <section class="info" v-if="job.dates.end == 'Current' || job.dates.end >= ((new Date()).getFullYear() - 5)" v-html="job.info">
                </section>
            </article>
        </section>
        <footer>

        </footer>
    </section>
</template>

<script>
import icons from '../../mixins/icons';

export default {
    mixins: [icons],
    data() {
        return {
            jobs: [
                {
                    title: 'Senior Software Engineer',
                    company: 'Custom Ink',
                    dates: {
                        start: 2020,
                        end: 'Current'
                    },
                    tech: {
                        ruby: 'Ruby',
                        rails: 'Rails',
                        nodejs: 'Node',
                        react: 'React',
                        github: 'GitHub',
                        docker: 'Docker'
                    },
                    info: `
                        <ul>
                            <li>Research and develop solutions to various business problems</li>
                            <li>Maintain and upgrade legacy code, bringing it in line with modern standards</li>
                            <li>Provide input on new technology or processes</li>
                            <li>Prototype and pilot internal tooling</li>
                            <li>Provide production support for applications owned by team</li>
                        </ul>
                    `
                },
                {
                    title: 'Adjunct Professor',
                    company: 'Hocking Technical College',
                    dates: {
                        start: 2019,
                        end: 2021
                    },
                    tech: {
                        python: 'Python',
                        linux: 'Linux',
                        readme: 'Blackboard LMS',
                        github: 'Github Education'
                    },
                    info: `
                        <ul>
                            <li>Design and plan the curriculum for the school's Python Essentials course</li>
                            <li>Teach and foster student learning in Python and other courses</li>
                            <li>Provide from-the-industry input to the department committees</li>
                            <li>Work closely with other instructors and department heads to help find solutions to school-level challenges</li>
                        </ul>
                        <p>Hocking College is a small public college primarily serving rural southeastern Ohio students. It provides a central hub of activity to help pull the students -- and the area at large -- out of poverty, stop brain-drain, and reinvest in the region.</p>
                    `
                },
                {
                    title: 'Affiliate Software Engineer',
                    company: 'Proof Group',
                    dates: {
                        start: 2018,
                        end: 2021
                    },
                    tech: {
                        python: 'Python',
                        django: 'Django',
                        github: 'GitHub',
                        nodejs: 'Node'
                    },
                    info: `
                        <ul>
                            <li>Help write the Python/Django portion of company's web UI over FileMaker</li>
                            <li>Provide advice on design changes/updates to improve user experience</li>
                            <li>Architect and develop experimental projects</li>
                            <li>Help others learn unfamiliar technology pieces</li>
                            <li>Help improve affiliate program</li>
                        </ul>
                        <p>
                            Proof Group uses a novel twist on keeping human resources on a contract/retainer basis, which they call an affiliate program. The program consists of a pool of consultants with various skillsets who work on a project basis. This is different from conventional contracting in some subtle, but important ways. The affiliate pool consists of true consultants, in a business-to-business type of relationship (so the affiliates are free to pick up projects based on their terms and work when and where they choose, so long as the work they agreed to do gets done), but with the ability to collaborate with one another and with key contacts of the core company team. To be an affiliate is to have an ongoing business-to-business relationship as a vendor to the company.
                        </p>
                    `
                },
                {
                    title: 'Senior Back-End Engineer',
                    company: 'BVAccel (formerly Rocket Code)',
                    dates: {
                        start: 2016,
                        end: 2018
                    },
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
                },
                {
                    title: 'Developer, GoExpo Division',
                    company: 'Core-Apps',
                    dates: {
                        start: 2014,
                        end: 2015
                    },
                    tech: {
                        php: 'PHP',
                        laravel: 'Laravel',
                        mysql: 'MySQL',
                        javascript: 'JavaScript'
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
                    dates: {
                        start: 2012,
                        end: 2014
                    },
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
    }
}
</script>

<style lang="less">
#experience {
    .card {
        h3 {
            margin-bottom: .5rem;
        }

        h4 {
            margin: 0;
            opacity: .6;
        }
    }

    .info li {
        list-style-type: circle;
        padding: 3px 2px;
        transition: all 1.5s;

        &:hover {
            background: rgba(97,122,113,.06);
        }
    }
}
</style>
