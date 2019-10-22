import axios from 'axios';
import uuid from 'uuid/v1';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default {
  createEvent({ commit }, event) {
    const bodyEvent = {
      id: uuid(),
      ...event
    }
    return apiClient.post('/events', bodyEvent)
      .then(response => {
        console.log(response);
        commit('ADD_EVENT', bodyEvent);
        commit('SET_EVENT', bodyEvent);
      });
  },
  getEvent({ commit }, eventId) {
    return apiClient.get(`/events/${eventId}`)
      .then(response => {
        commit('SET_EVENT', response.data);
      });
  },
  getEvents({ commit, state, dispatch }, page) {
    return apiClient.get(`/events?_limit=${state.list.limit}&_page=${page || 1}`)
      .then(response => {
        commit('SET_LIST', response.data);
        commit('SET_LIST_TOTAL', parseInt(response.headers['x-total-count']));
        commit('SET_LIST_PAGE', page || 1);
      })
      .catch(err => {
        dispatch('notifications/add', { type: 'error', message: `Error to fetching events: ${err.message}` }, { root: true });
      });
  }
};