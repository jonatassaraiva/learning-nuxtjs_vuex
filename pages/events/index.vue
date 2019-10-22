<template>
  <div>
    <h1>Events Listing ({{events.list.total}})</h1>
    <EventCard v-for="item in events.list.items" :key="item.id" :event="item" />
    <template v-if="currentPage != 1">
      <nuxt-link :to="`/events?page=${currentPage - 1}`">{{previous}}</nuxt-link>
      <template v-if="hasNextPage">|</template>
    </template>
    <nuxt-link v-if="hasNextPage" :to="`/events?page=${currentPage + 1}`">{{next}}</nuxt-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    EventCard
  },
  computed: {
    ...mapState(['events']),
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.events.list.total > this.currentPage * this.events.list.limit;
    }
  },
  data() {
    return {
      next: '>>',
      previous: '<<'
    };
  },
  fetch({ store, query, error }) {
    return store.dispatch('events/getEvents', query.page);
  },
  beforeUpdate() {
    if (this.currentPage !== this.events.list.page) {
      return this.$store.dispatch('events/getEvents', this.currentPage);
    }
  }
};
</script>