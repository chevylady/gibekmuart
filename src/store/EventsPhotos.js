import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useEventsPhotos = defineStore('events', () => {

  let events = reactive([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    
  ])

  return { events }
})