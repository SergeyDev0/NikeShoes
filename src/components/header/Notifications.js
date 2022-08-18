import notificationsIcon from '../../icons/notifications.svg'

const Notifications = () => {
    return(
        <button className="header-notifications">
            <img src={notificationsIcon} alt="notifications" />
        </button>
    )
}

export default Notifications;