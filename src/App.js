import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
