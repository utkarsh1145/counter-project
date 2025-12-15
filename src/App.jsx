import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter,setCounter]=useState(0)
 // let counter=5
  const addval=()=>{
    //counter=counter+1
    if(counter<20){
  // setCounter(counter+1)
  setCounter((prevCount)=>prevCount+1) // preferred way to update state based on previous state
  //setCounter((prevCount)=>prevCount+1)
    }
  }
  /*
  Explanation about the above preferred way of updating state based on previous state:

==> so the useState( )hook has a setCounter function name can be differ but it schedules jobs in batches so all the
    instructions inside setCounter will be sent once altogether so it sees that all are repeated instructions so 
     its gets executed only once. 
   ==> But in case of call back function (setCounter((prevCount)=>prevCount+1) syntax inside setCounter it immediately increments the value and when the next time
        it excutes it agian increments like that then it doesnt works in batches.
  */
  const subval=()=>{
    //counter=counter-1
    // setCounter(counter-=1) // this will also work but generally not used
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addval}>add value </button>
     <br />
      <button onClick={subval}>subtract value</button>
    </>
  )
}

export default App


/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. */


