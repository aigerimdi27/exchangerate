import './SingleCurrency.scss'

const SingleCurrency = () => {
    return (
        <>
            <div className="currency__content">
                <div className="currency__wrapper">
                    <div className="currency__single">
                        <select className="select" id='singleSelect'>
                            <option value="" disabled selected hidden>
                                Choose currency
                            </option>
                        </select>

                        <div className="currency__single__item">
                            <div className="currency__item current">
                                <div className="currency__titles">
                                    <div className="currency__title">USD</div>
                                    <div className="currency__full">American dollar</div>
                                </div>

                                <div className="currency__amount">1.00</div>
                                <div className="currency__action">
                                    <button className="currency__btn change">Change</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="currency__list">
                        <div className="currency__item">
                            <div className="currency__titles">
                                <div className="currecy__title">EUR</div>
                                <div className="currency__full">Euro</div>
                            </div>
                            <div className="currency__amount">2.00</div>
                            <div className="currency__action">
                                <button className="currency__btn remove">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="currency__add active">
                    <button className="currency__add__btn">Add currency</button>

                    <select className="select" id="addCurrency">
                        <option value="" disabled selected hidden>
                            Choose currency
                        </option>
                    </select>
                </div>
            </div>
        </>
    )
}


export default SingleCurrency