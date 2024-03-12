import React from 'react';

interface CategoryProps {
    value: number;
    onClickCategory: (index: number) => void;
}

function Categories({value, onClickCategory}: CategoryProps) {
    const categories = ['Все', 'Открытые', 'Закрытые', 'Есть друзья', 'Нет друзей'];
    return (
        <div className='categories'>
            <ul>
                {categories.map((categoryName, index) => {
                    return (
                        <li
                            key={index} // в статичном списке "можно" использовать index в качестве ключа :)
                        >
                            <button
                                onClick={() => {
                                    onClickCategory(index);
                                }}
                                className={value === index ? 'active' : ''}
                            >
                                {categoryName}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Categories;
