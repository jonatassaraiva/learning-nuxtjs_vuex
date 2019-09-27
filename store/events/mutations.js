export default {
  SET_LIST(state, events) {
    state.list.items = events
  },
  SET_LIST_TOTAL(state, total) {
    state.list.total = total
  },
  SET_LIST_PAGE(state, page) {
    state.list.page = page
  },
  SET_EVENT(state, event) {
    state.event = event
  }
} 