

import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [todos, setTodos] = useState(["Eat lunch", "Do assignment"]);
    const [counter, setCounter] = useState(0);

    const Number = useMemo(() => {return expensiveCalculation(counter)}, [counter] )

    function addTodo() {
        setTodos([...todos, "New todo"])
    }

  return (
    <div>
      <h1>Expensive Calculation : {Number}</h1>
      <h1>Count : {counter}</h1>
      <button onClick={() => setCounter((preValue) => preValue +1 )}>+</button>
      <h1>Todos :</h1>
      {todos.map((todo, i) => (
            <h3 key={i}>{todo}</h3>
      ))}
      <button onClick={addTodo}>Add new todo</button>
    </div>
  )
}

const expensiveCalculation = (number) => {
    console.log("Inside expensive calculation...")
    for (var i=0; i< 1000000; i++) {
        number = number +1;
    }
    return number;
}

export default UseMemo;
