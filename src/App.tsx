import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Charts from './components/Charts'
function App() {
  const queryClient = new QueryClient();
  return (
    <>
     <QueryClientProvider client={queryClient}>
        <div className="chart-container">
          <Charts />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
