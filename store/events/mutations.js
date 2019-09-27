export default {
  ADD_EVENT(state, event) {
    state.list.push(event)
  },
  SET_EVENTS(state, events) {
    state.list = events
  },
  SET_EVENTS_TOTAL(state, total) {
    state.total = total
  },
  SET_EVENT(state, event) {
    state.event = event
  }
} 