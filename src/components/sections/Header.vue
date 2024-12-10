<template>
  <section id="top">
      <header>
          <img class="avatar" :src="basics?.image" />
          <h1 :title="meta?.additionalData?.pronouns.join('/')">I'm {{  basics?.name }}</h1>
          <h2>{{ basics?.label }}</h2>
      </header>
      <nav>
          <ul>
              <li v-for="(item, i) in basics?.profiles" :key="i">
                  <a :href="item.url" target="_blank">
                      <i :class="networks[item.network.toLowerCase()].brand ? getFaBrandClass(networks[item.network.toLowerCase()].icon) : getFaClass(networks[item.network.toLowerCase()].icon)"></i> {{ item.network }}
                  </a>
              </li>
          </ul>
      </nav>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import { useIcons } from '../../mixins/icons';

const { getFaBrandClass, getFaClass } = useIcons();

const { basics, meta } = defineProps(['basics', 'meta']);

const networks = {
    blog: {
        brand: false,
        icon: 'pencil-alt'
    },
    github: {
        icon: 'github-alt',
        brand: true
    },
    gitlab: {
        icon: 'gitlab',
        brand: true
    },
    // {
    //     link: 'https://goo.gl/PXLSWi',
    //     icon: 'file-alt',
    //     text: 'Resume'
    // },
    linkedin: {
        icon: 'linkedin',
        brand: true
    },
    "slide decks": {
        icon: 'chalkboard-teacher',
        brand: false
    }
}
</script>
