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
  createEvent({ commit, dispatch }, event) {
    const newEvent = {
      id: uuid(),
      ...event
    }
    return apiClient.post('/events', newEvent)
      .then(result => {
        console.log(result);
        commit('ADD_EVENT', newEvent);
        commit('SET_EVENT', newEvent);
      });
  },
  getEvent({ commit, dispatch }, eventId) {
    return apiClient.get(`/events/${eventId}`)
      .then(result => {
        commit('SET_EVENT', result.data);
        return result;
      });
  }
};