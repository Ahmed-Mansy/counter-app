import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavbar from './Components/TopNavbar';
import Result from './Components/Result';

function App() {

  const [count, setCount] = useState(0)


  function increase() {
    setCount((state) => {
      return state += 1;
    });
  }


  function decrease() {
    setCount((state) => {
      return state -= 1;
    });
  }



  return (
    <>
      < TopNavbar />
      <div className=' d-flex justify-content-center align-items-center mt-5'>
        <div className="d-flex justify-content-around w-25">
          <div>
            <button onClick={increase} className="btn btn-success">Increase</button>

          </div>

          <Result count={count} />
          <div>
            <button onClick={decrease} className='btn btn-danger'>Decrease</button>
          </div>
        </div>

      </div>



    </>
  )
}

export default App
