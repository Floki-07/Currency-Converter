import { useState } from 'react'
import './App.css'
import Background from '/bg.jpeg'
import Inputbox from './compnents/Inputbox'
import { IoSwapVerticalSharp } from "react-icons/io5";
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { GrPowerReset } from "react-icons/gr";




function App() {
  const [amount, setamount] = useState("")
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [convertedamount, setconvertedamount] = useState("")

  const currencInfo = useCurrencyInfo(From)
  const options = Object.keys(currencInfo);

  const swapCurrency = () => {
    let temp = From;
    setFrom(To);
    setTo(temp);
    setconvertedamount(amount);
    setamount(convertedamount);
  }

  const handleSubmit = () => {
  
    setconvertedamount((amount * currencInfo[To]))
  }
  const handleReset = () => {
    setamount(0)
    setconvertedamount(0)

  }

  return (
    <div
    className='bg-zinc-800 h-[100vh] w-full relative'
    style={{
      backgroundImage: "url('https://img.freepik.com/free-vector/digital-rupee-concept-technology-background_1017-36657.jpg?w=826&t=st=1724151783~exp=1724152383~hmac=a961dce3546b164e49e1147342ea48924029a46701470153228d2f856d502b2b')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  >

      <div className='card absolute w-[35vw] h-[58vh] bg-slate-50/40 left-1/2 bottom-[25vh] translate-x-[-50%] rounded-lg text-center flex flex-col items-center gap-2 border border-white-4 shadow-lg shadow-slate-300' >
        <h2 className='w-[25vw]  font-bold  my-3 text-white text-3xl
        '>Currency  Converter</h2>
        <Inputbox
          labelname={"From"}
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          currencyType={From}
          onAmountChange={(amount) => setamount(amount)}
        />


        <button className=   ' absolute top-[22vh] bg-green-500 p-2 rounded-lg m-0 text-white font-semibold w-26 flex items-center gap-2  hover:bg-green-600 hover:scale-105'
          onClick={swapCurrency}

        >Swap <IoSwapVerticalSharp className='font-bold text-lg ' />  </button>



        <Inputbox
          labelname="To"
          amount={convertedamount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          currencyType={To}
          amountDisabled
        />


        <div className='flex gap-[5vw] items-center'>

        <button
          className='w-[14vw] bg-blue-700 font-semibold text-white p-2 rounded-lg  hover:bg-green-500 '
          onClick={handleSubmit}
          >Convert {From.toUpperCase()} to {To.toUpperCase()}</button>
        <GrPowerReset className='text-xl bg-blue-800 w-[5vw]  h-[5vh] m-4 p-2 rounded-lg text-white hover:bg-orange-700    '  
          onClick={handleReset}
        />

        </div>
      </div>

    </div>
  )
}

export default App
