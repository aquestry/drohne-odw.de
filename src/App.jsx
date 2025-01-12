import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
      <>
          <h1 className="title">Drohne-Odenwald</h1>
          <div>
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p className="subtitle">
                  Drohnaufnahmen im südlichen Odenwald.
              </p>
          </div>
      </>
  )
}
export default App