import posthog from 'posthog-js'

export function initPostHog() {
  if (!import.meta.env.VITE_POSTHOG_KEY) return
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST,
    defaults: '2025-05-24',
    capture_exceptions: true,
  })
}

export default posthog
