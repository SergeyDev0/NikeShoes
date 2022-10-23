import logoIcon from '../../icons/logo.svg'

const Logo = () => {
    return(
        <div className='header__wrapper-logo'>
            <img width={128} height={16.5} className='header-logo' src={logoIcon} alt="logo"/>
        </div>

    )
}

export default Logo;