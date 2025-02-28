import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, queryClient } from './router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
       
            <BrowserRouter />
            <ReactQueryDevtools position={'left'} initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
