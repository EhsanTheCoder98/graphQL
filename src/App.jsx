import React from 'react';
import Users from './components/Users';
import OneUser from './components/OneUser';
import LazyQuery from './components/LazyQuery';
import UseMutation from './components/UseMutation';

const App = () => {
    return (
        <div>
            {/* <Users /> */}
            {/* <OneUser /> */}
            {/* <LazyQuery /> */}
            <UseMutation />
        </div>
    );
};

export default App;