import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initTheme } from './theme.js'

initTheme()

const observers = new WeakMap()

const app = createApp(App)

app.directive('observe', {
  mounted(el) {
    el.classList.add('observe-hidden')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('observe-visible')
        el.classList.remove('observe-hidden')
        observer.unobserve(el)
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
})

app.mount('#app')
