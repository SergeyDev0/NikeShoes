import logoIcon from '../../icons/logo.svg'
import bantIcon from '../../icons/bant.svg'

const Logo = () => {
    return(
        <div className='header__wrapper-logo'>
            <img width={20} className='logo-bant' src={bantIcon} alt="logo-bant" />
            <img width={128} height={16.5} className='header-logo' src={logoIcon} alt="logo"/>
        </div>

    )
}

export default Logo;