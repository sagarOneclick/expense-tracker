import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Expenses } from './components/Expenses'
import Income from './components/Income'
import { Add } from './components/Add'

function App() {
  const [expenses,setExpenses]=useState([])
  const [incomes,setIncomes]=useState([])
  const [isAdding,setIsAdding]=useState(false)
  return (
    <>
      <Header/>
      <div style={{display:'flex'}}>
      <Expenses expenses={expenses}/>
      <Income income={incomes}/>
      </div>
      <Add props={[expenses,setExpenses,incomes,setIncomes]}/> 
    </>
  )
}

export default App
