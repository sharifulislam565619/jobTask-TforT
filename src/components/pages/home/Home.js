import React from 'react';
import Navigation from '../../Shared/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1 className='mt-5 pt-5 text-success'>You have successfully logged in</h1>
        </div>
    );
};

export default Home;