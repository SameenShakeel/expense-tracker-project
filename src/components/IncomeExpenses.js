import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Your Income</h4>
                <p className="money-plus">+0.00 Rs</p>
            </div>
            <div>
                <h4>Your Expense</h4>
                <p className="money-minus">-0.00 Rs</p>
            </div>
        </div>
    )
}
