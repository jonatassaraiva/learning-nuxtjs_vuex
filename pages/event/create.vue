<template>
  <div>
    <h2>Create an Event, {{users.user.name}}</h2>
    <h2>Categories of an event</h2>
    <p>There are {{categoriesLenth}} categories</p>
    <ul>
      <li v-for="(category, index) in categories" :key="`category_${index}`">{{category}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([ 'users' ]),
    categories() {
      return this.$store.state.categories.list;
    },
    categoriesLenth() {
      return this.$store.getters['categories/length'];
    }
  }
};
</script>

<style>
</style>