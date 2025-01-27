import React from 'react'

const Income = ({incomes}) => {
  return (
    <div>
        {incomes.map((income)=>{
            return (
                <>
                {income}
                </>
            )
        })}

    </div>
  )
}

export default Income