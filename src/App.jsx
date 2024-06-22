import { Route, Routes } from 'react-router-dom'
import { Tabs } from './components/Tabs/Tabs'
import { Convert } from './pages/ConvertPage'
import { SingleCurrency } from './pages/SingleCurrency'
import { Suspense } from 'react'

export const App = () => {


  return (
    <>
      <main className="main__section">
        <div className="container">
          <h1 className='main__title'>От локального к глобальному в одно касание !</h1>

          <div className="home">

            <Tabs/>
            <Suspense fallback={<span>Loading...</span>}>
              <Routes>
                <Route path="/" element={<Convert />}/>
                <Route path="/single" element={<SingleCurrency />}/>
              </Routes>
            </Suspense>

          </div>

        </div>
      </main>
    </>
  )
}