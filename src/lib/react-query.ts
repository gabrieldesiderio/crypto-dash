import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 20 * 60 * 1000, // 20 minutes
      refetchOnWindowFocus: false, // prevent rate limit
      refetchOnReconnect: false, // prevent rate limit
    },
  },
})
