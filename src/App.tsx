import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
// import groups from './data/groups.json';
import Sort from './components/Sort';
import Skeleton from './components/SkeletonGroup';
import GroupBlock from './components/GroupBlock';
import {myFetch} from './utility/myFetch';
import './scss/app.scss';
import {Group} from './types/common';

enum Category {
    ALL,
    OPEN,
    CLOSED,
    FRIENDS,
    NOFRIENDS
}
function App() {
    const [groups, setGroups] = React.useState<Group[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [category, setCategory] = React.useState(Category.ALL);
    const [color, setColor] = React.useState('all');

    function handleChangeColor(color: string) {
        setColor(color);
    }

    React.useEffect(() => {
        setIsLoading(true);
        myFetch(1000)
            .then(arr => {
                setGroups(arr as Group[]);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            });
    }, [category]);
    console.log(groups);
    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <div className='container'>
                    <div className='content__top'>
                        <Categories
                            value={category}
                            onClickCategory={(index: number) => setCategory(index)}
                        />
                        <Sort setColor={handleChangeColor} />
                    </div>
                    <h2 className='content__title'>Все группы</h2>
                    <div className='content__items'>
                        {isLoading
                            ? [...new Array(14)].map((_, index) => <Skeleton key={index} />)
                            : groups
                                  .filter(item => {
                                      if (category === Category.OPEN) {
                                          return !item.closed;
                                      }
                                      if (category === Category.CLOSED) {
                                          return item.closed;
                                      }
                                      if (category === Category.FRIENDS) {
                                          return item.friends;
                                      }
                                      if (category === Category.NOFRIENDS) {
                                          return !item.friends;
                                      }
                                      return true;
                                  })
                                  .filter(item => {
                                      if (color === 'all') {
                                          return true;
                                      }
                                      return item.avatar_color === color;
                                  })
                                  .map((group: Group) => {
                                      return <GroupBlock key={group.id} {...group} />;
                                  })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
