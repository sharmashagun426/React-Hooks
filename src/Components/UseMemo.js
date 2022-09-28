import React, {useState, useMemo} from 'react'

export default function UseMemo() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)

  const newApple = useMemo(
    function appleTime() {
      console.warn("Hello")
      return 100 * count;
    },[item])
  return (
    <div className="App">
      <h1>UseMemo Component</h1>
      <h1>{count}</h1>
      <h1>{newApple}</h1>
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update State</button>

    </div>
  )
}
