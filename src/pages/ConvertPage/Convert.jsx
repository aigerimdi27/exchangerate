import './Convert.scss'
import switchIcon from '../../assets/images/switchicon.svg'
import downArrow from '../../assets/images/downarrowicon.svg'
import equalIcon from '../../assets/images/equalicon.svg'
import upArrow from '../../assets/images/uparrowicon.svg'

const Convert = () => {
    return (
        <>
          <div className="content">
            <form>
                <div className="form__inputs">
                    <div className="form__amount">
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
                            <select 
                                className="select" 
                                name="from" 
                                id="from" 
                                required>
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
                            <select 
                                className="select" 
                                name="to" 
                                id="to"
                                required>
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
                        <div className="form__result from" id='resultFrom'>
                            <div className="form__result__icon">
                                <img src={downArrow} alt="" />
                            </div>

                            <div className="form__result__titles">
                                <div className="form__result__title">USD</div>
                                <div className="form__result__full">American dollar</div>
                            </div>

                            <div className="form__result___value">1.00</div>
                        </div>

                        <div className="form__result__equals">
                            <img src={equalIcon} alt="" />
                        </div>

                        <div className="form__result to" id="resultTo">
                            <div className="form__result__icon">
                                <img src={upArrow} alt="" />
                            </div>

                            <div className="form__result__titles">
                                <div className="form__result__title">EUR</div>
                                <div className="form__result__full">Euro</div>
                            </div>

                            <div className="form__result__value">2.00</div>
                        </div>
                    </div>

                    <button type="submit" className="form__btn">Convert</button>
                </div>

                <div className="rate__info">
                    <div className="rate__conversion">$1 = $35</div>
                    <div className="rate__last">Updated 18 JUne 2024</div>
                </div>
            </form>
          </div>
        </>
    )
}

export default Convert 