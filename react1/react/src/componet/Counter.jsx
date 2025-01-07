import React, { useState } from 'react';

const Counter = () => {
    const [username, setUsername] = useState('');
    
    function changeUser(e) {
        setUsername(e.target.value);
    }
 
    return (
        <div>
            <input
                value={username}
                onChange={changeUser}
                placeholder="type reviews"
                type="text"
            />
            <p>{username}</p>
        </div>
    );
};

export default Counter;
