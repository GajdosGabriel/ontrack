import { createApp } from 'vue'
import { syncState } from './storage'
import { startCurrentDateTimer } from './time'
import App from './App.vue'

import './assets/main.css'

// const name: string = 'jjjjjjjjjj';

// console.log(name)

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', (): void =>
  syncState(document.visibilityState === 'visible')
)

createApp(App).mount('#app')
