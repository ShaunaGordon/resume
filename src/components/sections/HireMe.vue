<template>
    <section id="hire-me" class="no-print">
        <header>
            <h2>Let's Work Together!</h2>
            <p v-if="basics.looking == 'w2'">
                You're in luck! I'm <strong>actively looking</strong> for new <strong>employment opportunities</strong>. Please have a look at the extra info, below, and if you think your company and I would make a good pairing, drop me a line via email or LinkedIn.
            </p>
            <p v-else-if="basics.looking == 'freelance'">
                You're in luck! I'm open to <strong>consulting opportunities</strong>. Please note that this is not pseudo-employee contracts, but a business-to-business type of arrangement. If you need someone on a retainer, ad-hoc, or project basis, we might be a good fit! I run my consulting similarly to what I look for in a conventional employment environment, so check out the extra info, below, and if you think your company and mine would make a good business pairing, then drop me a line via email or LinkedIn.
            </p>
            <p v-else>
                I'm <strong>not</strong> currently looking for new opportunities right now. Feel free to check back again, and if you think you've got a <em>really great</em> company that aligns with my skills and values (discussed below), feel free to drop me a line via email or LinkedIn. Please keep in mind, though, that unless the opportunity <em>very closely</em> aligns with my values, experience, and goals, I very likely will not respond or will only respond to turn it down.
            </p>
        </header>
        <section class="cardholder">
            <article v-if="basics.location.relocate" class="card">
                <header>
                    <h3>Location</h3>
                </header>
                <p>
                    I am currently open to relocating <span v-if="basics.location.relocate.to"><strong v-if="basics.location.relocate.exclusive">only</strong> to these locations:</span>
                </p>
                <ul v-if="basics.location.relocate.to">
                    <li v-for="(location, index) in basics.location.relocate.to" :key="index">
                        <strong>{{ location.name }}</strong> &mdash; <span v-html="fromInlineMarkdown(location.info)"></span>
                    </li>
                </ul>
                <p v-if="basics.location.relocate.assistance" v-html="fromInlineMarkdown(basics.location.relocate.assistance)"></p>
            </article>
            <article class="card">
                <header>
                    <h3>Core Values</h3>
                </header>
                <section>
                    <p>
                        I've taken the time to codify and describe the values that I live by as a person. These values are integral to my being and have, I've found, brought me success and fulfillment. The values are listed here, and <a href="https://shaunagordon.com/2024/12/14/personal-core-values-revisited/" target="_blank">their discussions can be found on my blog.</a>
                    </p>
                    <ul>
                        <li v-for="(value, i) in basics.values" :key="i">{{ value }}</li>
                    </ul>
                </section>
            </article>
        </section>
    </section>
</template>

<script setup>
import { useMarkdown } from '../../mixins/markdown';

const { fromInlineMarkdown } = useMarkdown();

const { basics } = defineProps(['basics'])
</script>

<style scoped>
    .cardholder {
        grid-auto-flow: row dense;

        h3 {
            font-size: 1.5rem;
        }

        li {
            margin-bottom: var(--gutter-narrow);
        }
    }
</style>
