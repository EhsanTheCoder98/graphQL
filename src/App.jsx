import React from 'react';
import Users from './components/Users';
import OneUser from './components/OneUser';
import LazyQuery from './components/LazyQuery';

const App = () => {
    return (
        <div>
            {/* <Users /> */}
            {/* <OneUser /> */}
            <LazyQuery />
        </div>
    );
};

export default App;