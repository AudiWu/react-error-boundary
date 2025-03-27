import ErrorBoundary from "./ErrorBoundary"
import TestComponent from "./TestComponent"

function App() {

  return (
    <>
      <ErrorBoundary>
        <TestComponent error />
      </ErrorBoundary>
      <ErrorBoundary>
        <TestComponent error={false} />
      </ErrorBoundary>
    </>
  )
}

export default App
