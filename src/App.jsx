import { Tabs } from './components/Tabs/Tabs'
import Convert from './pages/ConvertPage/Convert'

export const App = () => {


  return (
    <>
      <main>
        <div className="container">
          <h1>Check live foreign currency exchange rates</h1>

          <div className="home">
            <div className="wrapper">

              <Tabs/>
              <Convert/>

            </div>
          </div>

        </div>
      </main>
    </>
  )
}