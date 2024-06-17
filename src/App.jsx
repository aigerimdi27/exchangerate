import convertIcon from '../src/assets/images/convertpageicon.svg'
import singleIcon from '../src/assets/images/singlepageicon.svg'
import switchIcon from '../src/assets/images/switchicon.svg'
import downArrow from '../src/assets/images/downarrowicon.svg'
import upArrow from '../src/assets/images/uparrowicon.svg'
import equalIcon from '../src/assets/images/equalicon.svg'

export const App = () => {


  return (
    <>
      <main>
        <div className="container">
          <h1>Check live foreign currency exchange rates</h1>

          <div className="home">
            <div className="wrapper">

              <div className="tabs">
                <div className="tab active">
                  <div className="tab__icon">
                    <img src={convertIcon} alt="" />
                  </div>
                  <div className="tab__title">Convert</div>
                </div>

                <div className="tab">
                  <div className="tab__icon">
                    <img src={singleIcon} alt="" />
                  </div>
                  <div className="tab__title">Single</div>
                </div>
              </div>


              <div className="content">
                <form>
                  <div className="form__inputs">
                    <div className="form__group">
                      <label htmlFor="amount">Amount</label>
                      <input 
                        type="number" 
                        name="amount" 
                        id="amount" 
                        placeholder="1.00"
                        required
                      />
                    </div>

                    <div className="form__selects">
                      <div className="form__select">
                        <label htmlFor="from">From</label>
                        <select className="select" name="from" id="from" required>
                          <option value="" disabled selected hidden>
                            Choose currency
                          </option>
                        </select>
                      </div>

                      <div className="form__select__icon switch-currencies">
                        <img src={switchIcon} alt="" />
                      </div>

                      <div className="form__select">
                        <label htmlFor="to">To</label>
                        <select className="select" name="to" id="to" required>
                          <option value="" disabled selected hidden>
                            Choose currency
                          </option>
                        </select>
                      </div>

                    </div>
                  </div>

                  <div className="form__info">
                    <div className="loader">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="form__results">
                      <div className="form__result__item from" id='resultFrom'>
                        <div className="form__result__item-icon">
                          <img src={downArrow} alt="" />
                        </div>

                        <div className="form__result__item-titles">
                          <div className="form__result__item-title">USD</div>
                          <div className="form__result__item-full">American dollar</div>
                        </div>
                        
                        <div className="form__result__item-value">1.00</div>
                      </div>

                      <div className="form__result__equals">
                        <img src={equalIcon} alt="" />
                      </div>

                      <div className="form__result__item to" id='resultTo'>
                        <div className="form__result__item-icon">
                          <img src={upArrow} alt="" />
                        </div>

                        <div className="form__result__item-titles">
                          <div className="form__result__item-title">EUR</div>
                          <div className="form__result__item-full">Euro</div>
                        </div>
                        
                        <div className="form__result__item-value">2.00</div>
                      </div>
                    </div>

                    <button type="submit" className='form__submit'>Convert</button>
                  </div>

                  <div className="rate__information">
                    <div className="rate__conversion">$1 = $35</div>
                    <div className="rate__last">Updated 16 June 2024</div>

                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  )
}