import { useState, useReducer } from "react"
import styled from '@emotion/styled'

const UseStateCounter = () => {
  const [count, setCount ] = useState(0)

  const increment = () => (
    setCount((prevCount) => prevCount + 1)
  )

  const decrement = () => (
    setCount(prevCount => prevCount - 1)
  )

  return (
    <>
      <h2>Counter using useState Hook</h2>
      <Counter>
        <Button onClick={() => decrement()}>-</Button>
        <Number>{count}</Number>
        <Button onClick={() => increment()}>+</Button>
      </Counter>
    </>
  )
}


// const UseReducerCounter 

function App() {


  return (
    <Container>
      <UseStateCounter />
    </Container>
  )
}

// STYLED COMPOMENTS
const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
`
const Counter = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  padding: 5px 20px;
  margin: 0 20px;
  font-weight: bold;
  font-size: 1.3rem;
`

const Number = styled.p`
  font-size: 1.4rem;
`

export default App
