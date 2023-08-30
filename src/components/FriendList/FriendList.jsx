import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export function FriendList({ friends }) {
    return <ul className={css.friendlist}>
        {friends.map(({ avatar, name, isOnline, id }) => {
              return <li key={id} className={css.item}>
                <span className={`${css.status}  ${isOnline ? css.online : css.offline}`}></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
            
        })}
    </ul>
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline:PropTypes.bool,
    }))
        
    
}