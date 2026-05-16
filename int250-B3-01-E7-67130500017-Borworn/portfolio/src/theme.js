import { ref, readonly } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const isDark = ref(true)

function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

function resolveDark() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light') return false
  if (saved === 'dark') return true
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function initTheme() {
  isDark.value = resolveDark()
  applyTheme(isDark.value)
}

export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }

  return { isDark: readonly(isDark), toggle }
}
