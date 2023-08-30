import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({id,name,avatar,isOnline}) => {
       return <li key={id} className={css.item}>
                <span className={`${css.status}  ${isOnline ? css.online : css.offline}`}></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
}
FriendListItem.propTypes = {
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline:PropTypes.bool,
    }