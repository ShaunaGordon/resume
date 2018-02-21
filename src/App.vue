<template>
  <div id="app">
    <header-section></header-section>
    <skills-section></skills-section>
    <experience-section></experience-section>
    <projects-section></projects-section>
  </div>
</template>

<script>
import HeaderSection from './components/sections/Header.vue';
import SkillsSection from './components/sections/Skills.vue';
import ExperienceSection from './components/sections/Experience.vue';
import ProjectsSection from './components/sections/Projects.vue';

export default {
  name: 'app',
  components: {
    HeaderSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection
  }
}
</script>

<style>
body {
    background-color: #d8d6cd;
}

#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3f4f5f;
  margin: 60px 4rem 5rem 4rem;
  font-size: 18px;
}

h2 {
    font-size: 4rem;
}

h3 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

header {
    text-align: center;
    font-family: 'Forum', Helvetica, Arial, sans-serif;
}

header p {
    margin: 0 auto;
    margin-bottom: 3rem;
    margin-top: -1.5rem;
    max-width: 40rem;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    opacity: .75;
    font-weight: 100;
}

a {
    text-decoration: none;
    color: #754668;
    font-weight: bold;
    transition: all 1s;
}

a:hover {
    color: #617a71;
}

.icon {
    vertical-align: middle;
    margin-right: 2px;
}

.cardholder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 40rem));
    grid-gap: 1rem;
    justify-content: center;
}

.card {
    background: #efecda;
    box-shadow: 3px 3px 5px 0 rgba(0,0,0,.08);
    padding: 1rem 1.5rem;
    border-radius: 3px;
}

.card header {
    text-align: left;
}

.tech {
    column-count: 3;
    color: #7f968f;
    list-style-type: none;
    padding-left: 0;
}

.tech li {
    margin-bottom: 5px;
}
</style>
