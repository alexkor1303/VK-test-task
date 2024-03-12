import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: object) => (
    <ContentLoader
        className='group-block'
        speed={0.7}
        width={180}
        height={280}
        viewBox='0 0 180 280'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
    >
        <circle cx='82' cy='52' r='50' />
        <circle cx='599' cy='357' r='23' />
        <circle cx='608' cy='345' r='46' />
        <circle cx='602' cy='346' r='67' />
        <rect x='30' y='116' rx='0' ry='0' width='108' height='22' />
        <rect x='8' y='156' rx='0' ry='0' width='160' height='114' />
    </ContentLoader>
);

export default Skeleton;
