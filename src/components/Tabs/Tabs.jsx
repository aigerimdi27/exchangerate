import { Link } from 'react-router-dom'
import './Tabs.scss'
import convertIcon from '../../assets/images/convertpageicon.svg'
import singleIcon from '../../assets/images/singlepageicon.svg'

export const Tabs = () => {
    return (
        <>
            <div className="tabs">
                <div className="tab active">
                    <div className="tab__icon">
                        <img src={convertIcon} alt="" />
                    </div>
                    <Link to="/" className="tab__title">Convert</Link>
                </div>
                <div className="tab">
                    <div className="tab__icon">
                        <img src={singleIcon} alt="" />
                    </div>
                    <Link to="/single" className="tab__title">Single</Link>
                </div>
            </div>
        </>
    )
}