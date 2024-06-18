import { NavLink } from 'react-router-dom'
import './Tabs.scss'
import convertIcon from '../../assets/images/convertpageicon.svg'
import singleIcon from '../../assets/images/singlepageicon.svg'

export const Tabs = () => {
    return (
        <>
            <div className="tabs">
                <div className="tab">
                    <div className="tab__icon">
                        <img src={convertIcon} alt="" />
                    </div>
                    <NavLink to="/" className="tab__title">Convert</NavLink>
                </div>
                <div className="tab">
                    <div className="tab__icon">
                        <img src={singleIcon} alt="" />
                    </div>
                    <NavLink to="/single" className="tab__title">Single</NavLink>
                </div>
            </div>
        </>
    )
}