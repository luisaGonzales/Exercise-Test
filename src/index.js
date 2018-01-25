import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'redux-zero/react';

const Index = () => {
    return(
        <Provider >
            <App />
        </Provider>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
