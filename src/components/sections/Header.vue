<template>
  <section id="top">
      <header>
          <img class="avatar no-print" :src="basics?.image" />
          <h1 :title="basics?.pronouns.join('/')"><span class="no-print">I'm </span>{{  basics?.name }}</h1>
          <h2 clsaa="no-print">{{ basics?.label }}</h2>
      </header>
      <nav>
          <ul>
              <li v-for="(item, i) in basics?.profiles" :key="i">
                  <a :href="item.url" target="_blank">
                      <i :class="networks[item.network.toLowerCase()].brand ? getFaBrandClass(networks[item.network.toLowerCase()].icon) : getFaClass(networks[item.network.toLowerCase()].icon)"></i> <span class="no-print">{{ item.network }}</span>
                  </a>
              </li>
          </ul>
      </nav>
  </section>
</template>

<script setup>
import { useIcons } from '../../mixins/icons';

const { getFaBrandClass, getFaClass } = useIcons();

const { basics } = defineProps(['basics']);

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
