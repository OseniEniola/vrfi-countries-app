import { useState } from 'react'
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, queryClient } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
       
            <BrowserRouter />
          
      </QueryClientProvider>
    </>
  )
}

export default App
