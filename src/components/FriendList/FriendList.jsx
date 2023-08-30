import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem'
import PropTypes from 'prop-types';

export const FriendList=({ friends })=>{
    return <ul className={css.friendList}>
        {friends.map(({id,avatar,name,isOnline}) =><FriendListItem id={id} name={name} avatar={avatar} isOnline={isOnline} />
            )}
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

