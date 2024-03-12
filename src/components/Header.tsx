import React from 'react';
import logoPng from '../assets/img/logotype.png';
function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header__logo'>
                    <img width='50' src={logoPng} alt='Vk logo' />
                    <div>
                        <h1>VK TEST QUEST</h1>
                        <p>Отображение и фильтрация групп</p>
                    </div>
                </div>
                <div className='header__cart'>
                    <a href='./index.html' className='button button--cart'>
                        Обновить
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Header;
