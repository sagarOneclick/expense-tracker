import React from 'react'

export const Expenses = ({expenses}) => {
  return (
    <div>
        {expenses.map((expense)=>{
            return (
                <>
                {expense}
                </>
            )
        })}

    </div>
  )
}
