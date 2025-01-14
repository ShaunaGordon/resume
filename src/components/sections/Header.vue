<template>
  <section id="top">
      <header>
          <img class="avatar" :src="basics?.image" />
          <h1 :title="basics?.pronouns.join('/')">I'm {{  basics?.name }}</h1>
          <h2>{{ basics?.label }}</h2>
      </header>
      <nav>
          <ul>
              <li v-for="(item, i) in basics?.profiles" :key="i">
                  <a :href="item.url" target="_blank">
                      <i :class="getProfileIcon(item.network.toLowerCase())"></i>{{ item.network }}
                  </a>
              </li>
          </ul>
      </nav>
  </section>
</template>

<script setup>
import { useProfiles } from '../../utils/profiles';

const { getProfileIcon } = useProfiles();

const { basics } = defineProps(['basics']);

</script>
