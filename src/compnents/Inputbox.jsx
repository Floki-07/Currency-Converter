import { React, useId } from 'react'

const Inputbox = ({
    labelname,
    amount,
    amountDisabled = false,
    CurrencyDisabled = false,
    onAmountChange,
    currencyType = "usd",
    onCurrencyChange,
    currencyOptions = []
}) => {
    const AmountId = useId();
    //dont use useid for key in loop
    
    return (
        <div >
            <div className='inputBox w-[29vw] mx-auto bg-sky-800 h-[15vh] p-3 pb-5 flex justify-between gap-3 rounded-lg border border-[2px] '  >

                <div className='block1 flex  w-[14vw] flex-col  gap-4  '>
                    <label htmlFor={AmountId} className=' font-semibold text-white translate-x-[-40%]  '>{labelname}</label>
                    <input type="number"
                        id={AmountId}
                        className='p-1 rounded-lg  bg-white'
                        placeholder='Amount'
                        value={amount}
                        disabled={amountDisabled}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                    />
                </div>

                <div className= ' block2 main-field flex justify-between items-center mb-3 flex-col' >
                    
                <label htmlFor="curroption" className=' font-semibold text-white '>Select Currency</label>
                   

                    <div className='flex flex-col'>

                        <select name='curr-option'
                            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                            value={currencyType}
                            onChange={(e) => onCurrencyChange &&
                                onCurrencyChange(e.target.value)
                            }
                        >
                            {currencyOptions.map((currency) => (
                                <option value={`${currency}`} key={currency}>
                                    {currency}
                                    </option>

                            ))}


                        </select>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Inputbox;
