import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/app';

import './style/main.scss';

const ClientApp: React.FC = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const appPlaceholder = document.getElementById('app-placeholder');
ReactDOM.render(<ClientApp />, appPlaceholder);
