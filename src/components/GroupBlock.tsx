import React from 'react';
import '../scss/components/_modalWindow.scss';
import {Group} from '../types/common';

const statusGroup = {
    open: 'Открытая',
    close: 'Закрытая'
};

function GroupBlock({avatar_color, name, closed, members_count, friends}: Group) {
    const [friendsInfo, setFriendsInfo] = React.useState(false);
    return (
        <div className='group-block'>
            {avatar_color && (
                <div className='group-block__image' style={{backgroundColor: avatar_color}}></div>
            )}
            <h4 className='group-block__title'>{name}</h4>
            <div className='group-block__selector'>
                <ul>
                    <li className='group-block__item'>{statusGroup[closed ? 'close' : 'open']}</li>
                </ul>
                <ul>
                    <li className='group-block__item'>{members_count} подписчиков</li>
                </ul>
                {friends ? (
                    <button
                        className='group-block__button'
                        onClick={() => setFriendsInfo(!friendsInfo)}
                    >
                        {friends.length} друга подписаны
                    </button>
                ) : (
                    ''
                )}
                {friendsInfo && (
                    <ul>
                        <div className='friendsList__block'>
                            {friends &&
                                friends.map((friend, index) => (
                                    <li key={index} className='friendsList__item'>
                                        {friend.first_name} {friend.last_name}
                                    </li>
                                ))}
                        </div>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default GroupBlock;
