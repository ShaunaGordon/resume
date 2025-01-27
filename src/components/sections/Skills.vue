<template>
  <section id="skills">
      <header>
          <h2>Skills</h2>
      </header>
      <article class="donuts">
          <donut v-for="(value, key) in skills" :name="key" :items="value" :key="key"></donut>
      </article>
  </section>
</template>

<script>
import Donut from '../support/Donut.vue';

export default {
  components: {
    Donut
  },
  data() {
    return {
      skills: {
        general: {
          php: 10,
          ruby: 3,
          python: 2,
          sql: 12,
          html: 18,
          css: 18,
          js: 18
        },
        paradigms: {
          oop: 18,
          functional: 3,
          mvc: 12
        },
        devops: {
          linux: 16,
          macos: 10,
          ansible: 4,
          docker: 7,
          vagrant: 4,
          k8s: 2
        },
        php: {
          php7: 4,
          php5: 8,
          laravel: 5
        },
        javascript: {
          vue: 3,
          react: 4,
          node: 5,
          jest: 5,
          webpack: 5
        },
        css: {
          vanilla: 18,
          sass: 9,
          less: 4
        }
      }
    }
  }
}
</script>

<style scoped>
    .donuts {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 330px));
        align-items: center;
        justify-content: space-around;
    }
</style>
