import Greeter from './components/Greeter';
import React, { useState } from 'react'; 
const App = () => {
    const [username, setUsername] = useState(' '); 
    const [loaded, setLoaded] = useState(false);
    function loading() {
        if (loaded === false) {
            <h1>Website loading ...</h1>
        }
            <h1>Loading complete</h1>
    }
    
    return (
        <div>
            <h1>This is Objective 1 of Simple Tasks a la React</h1>
            <Greeter phrase='Hello there' name ='Cohort15'/>
            <Greeter phrase='Hello there' name ='Stack Web Dev'/>
            <Greeter phrase='Hello there' name ='Data Analytics'/>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <p>You are Logging in as: {username}</p>
            
        </div>
    );
};

export default App;