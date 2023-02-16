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


const UseReducerCounter = () => {

  // set initialState    
  const initialState = { count: 0 }

  // set action types
  type ACTIONTYPE = 
    {type: 'increment'; payload: number} | {type: 'decrement'; payload: number}

  // define reducer function
  // it takes a state (our current state), typeof is used to get type from initialState constant
  // and an action which is an object and defines the mutation to be applied to the state
  const countReducer = (state: typeof initialState, action: ACTIONTYPE) => {
    // we decide how to act based on the type property in action
    switch(action.type ) {
      case 'increment':
        return (
          {count: state.count + 1}
        )
      case 'decrement':
        return (
          { count: state.count - 1 }
        )
      default:
        throw new Error('no action')
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <>
      <h2>Counter using useReducer Hook</h2>
      <Counter>
        <Button onClick={() => dispatch({type: 'decrement', payload: 1})}>-</Button>
        <Number>{state.count}</Number>
        <Button onClick={() => dispatch({type: 'increment', payload: 1})}>+</Button>
      </Counter>
    </>
  )


}

function App() {


  return (
    <Container>
      <UseStateCounter />
      <UseReducerCounter />
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