<template>
  <form @submit.prevent="createEvent">
    <h3>Create an Event</h3>
    <div class="field">
      <label>Category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
    </div>

    <h3>Name and describe your event</h3>
    <div class="field">
      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Add an event title" />
    </div>
    <div class="field">
      <label>Description</label>
      <input v-model="event.description" type="text" placeholder="Add a description" />
    </div>
    <h3>Where is your event?</h3>
    <div class="field">
      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Add a location" />
    </div>
    <h3>When is your event?</h3>
    <div class="field">
      <label>Date</label>
      <client-only>
        <date-picker v-model="event.date" placeholder="Select a date" />
      </client-only>
    </div>
    <div class="field">
      <label>Select a time</label>
      <select v-model="event.time">
        <option v-for="time in times" :key="time">{{ time }}</option>
      </select>
    </div>
    <input type="submit" class="button -fill-gradient" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      startTime: '',
      event: this.createFreshEvent(),
      times: this.createTimes(),
      categories: this.$store.state.categories.list
    };
  },
  methods: {
    createFreshEvent() {
      const user = this.$store.state.users.user;
      return {
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: [],
        organizer: user
      };
    },
    createTimes() {
      const times = [];
      for (let i = 1; i <= 24; i++) {
        times.push(i + ':00');
      }
      return times;
    },
    createEvent() {
      this.$store.dispatch('events/createEvent', this.event)
        .then(() => {
          this.event = this.createFreshEvent();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>
.field {
  margin-bottom: 24px;
}
</style>