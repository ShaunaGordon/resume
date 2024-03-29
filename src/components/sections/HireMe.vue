<template>
    <section id="hire-me">
        <header>
            <h2>Let's Work Together!</h2>
            <p v-if="looking == 'w2'">
                You're in luck! I'm <strong>actively looking</strong> for new <strong>employment opportunities</strong>. Please have a look at my values, below, and if you think your company and I would make a good pairing, drop me a line via email or LinkedIn.
            </p>
            <p v-else-if="looking == 'freelance'">
                You're in luck! I'm open to <strong>consulting opportunities</strong>. Please note that this is not pseudo-employee contracts, but a business-to-business type of arrangement. If you need someone on a retainer, ad-hoc, or project basis, we might be a good fit! I run my consulting similarly to what I look for in a conventional employment environment, so check out my core values, below, and if you think your company and mine would make a good business pairing, then drop me a line via email or LinkedIn.
            </p>
            <p v-else>
                I'm <strong>not</strong> currently looking for new opportunities right now. Feel free to check back again, and if you think you've got a <em>really great</em> company that aligns with my skills and values (discussed below), feel free to drop me a line via email or LinkedIn. Please keep in mind, though, that unless the opportunity <em>very closely</em> aligns with my values and experience, I very likely will not respond or will only respond to turn it down.
            </p>
        </header>
        <section class="cardholder">
            <article class="card">
                <header>
                    <h3>Core Values</h3>
                </header>
                <section>
                    <p>
                        I've taken the time to codify and describe the values that I live by as a person. These values are integral to my being and have, I've found, brought me success and fulfillment. The values are listed here, and <a href="http://shaunagordon.com/2018/03/08/personal-core-values/" target="_blank">their discussions can be found on my blog.</a>
                    </p>
                    <ul>
                        <li v-for="(value, i) in values" :key="i">{{ value }}</li>
                    </ul>
                </section>
            </article>
            <article class="card">
                <header>
                    <h3>Environment Ideals</h3>
                </header>
                <section>
                    <p>
                        Over the course of my career, I've kept track of the things that do and don't work for me in a workplace, in addition to value alignments. I've outlined them below, and <a href="http://shaunagordon.com/blog/2014/10/15/dear-recruiters/#what-i-want-in-a-job" target="_blank">more information on them can be found in my blog.</a>
                    </p>
                    <ul>
                        <li v-for="(environment, i) in environments" :key="i">{{ environment }}</li>
                    </ul>
                </section>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            looking: 'w2',
            values: [
                'Always Be Learning',
                "Don't Fear Failure",
                'Criticism Is Opportunity In Disguise',
                'Be Constructive',
                'Say What You Mean, Mean What You Say',
                'Be Transparent',
                "Do What's Right",
                'Take Ownership',
                'Take Care Of Yourself'
            ],
            environments: [
                'No Agencies (unless you are very explicitly dev-friendly)',
                'Remote-Friendly',
                'Results-Only',
                'Encourage Self-Direction And Project Ownership'
            ]
        }
    }
}
</script>

<style lang="less">
    .cardholder {
        grid-auto-flow: row dense;
        h3 {
            font-size: 1.5rem;
        }
    }
</style>
