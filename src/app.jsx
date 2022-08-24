import { useState } from 'preact/hooks'

import './app.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mobile Shop</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
