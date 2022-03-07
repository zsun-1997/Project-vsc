import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './context/Modal.context';
import Context from './context/Context';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Context>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </Context>
        </BrowserRouter>
    </React.StrictMode>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
