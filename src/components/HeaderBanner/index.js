import './style.css'
import banner from '../../img/header-text.png'


const HeaderBanner=()=>{
    return(
        <div className='header'>
            <div className="header-bottom-box all-padding">
            <img src={banner} />
            <div className="header-time-box">
                <div className="clock">
                    <p>30</p>
                    <span>:</span>
                    <p>07</p>
                    <span>:</span>
                    <p>07</p>
                    <span>:</span>
                    <p>00</p>
                </div>
    
                <button className="btn info ">
                    <span><i className="fa-solid fas fa-circle-info"></i></span>
                    <span>اطلاعات بیشتر</span>
                </button>
            </div>
    
    
        </div>
    </div>
    )

}


export default HeaderBanner;