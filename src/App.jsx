import { Route, Routes } from 'react-router-dom'
import { Tabs } from './components/Tabs/Tabs'
import { Convert } from './pages/ConvertPage'
import { SingleCurrency } from './pages/SingleCurrency'

export const App = () => {


  return (
    <>
      <main>
        <div className="container">
          <h1>Check live foreign currency exchange rates</h1>

          <div className="home">
            <div className="wrapper">

              <Tabs/>
              <Routes>
                <Route path="/" element={<Convert/>}/>
                <Route path="/single" element={<SingleCurrency/>}/>
              </Routes>

            </div>
          </div>

        </div>
      </main>
    </>
  )
}