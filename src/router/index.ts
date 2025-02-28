import { QueryClient } from '@tanstack/react-query';

export { default as BrowserRouter } from './BrowserRouter';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Automatically refetch data in the background when the component mounts or when window refocuses
      refetchOnWindowFocus: false, // refetch on window focus
      refetchOnReconnect: false, // refetch on reconnect
      refetchOnMount: true, // refetch on mount
      // refetchInterval: false, // no automatic fetching
      // Enable caching and set cache time (default: 5 minutes)
      gcTime: 60 * 60 * 1000,
      // Set stale time to avoid frequent background fetches (default: 0)
      staleTime: 0,
      // Retry failed requests up to 3 times
      retry: false,
      // Enable retry only for network or server errors
      retryOnMount: false,
      // Query function errors are not thrown to the console
      throwOnError: false
    },
    mutations: {
      // Retry failed mutations up to 2 times
      retry: false
    }
  }
});
