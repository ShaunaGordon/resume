<template>
    <section id="hire-me">
        <header>
            <h2>Let's Work Together!</h2>
            <p v-if="looking">
                You're in luck! I'm <strong>actively looking</strong> for new opportunities. Please have a look at my values, below, and if you think your company and I would make a good pairing, drop me a line via email or LinkedIn.
            </p>
            <p v-else>
                I'm <strong>not</strong> actively looking for new opportunities right now. Feel free to check back again, and if you think you've got a <em>really great</em> company that aligns with my skills and values (discussed below), feel free to drop me a line via email or LinkedIn.
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
            looking: true,
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
                'No Agencies',
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
