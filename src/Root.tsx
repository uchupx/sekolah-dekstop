import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import configureStore, { history } from './stores/configureStore'
import Routes from './Routes';
import GlobalStyle from '../assets/fonts/index'
import ReactDom from 'react-dom';
import { height } from '@material-ui/system';


const store = configureStore()

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const Root = () => (
    <div style={{height: '100vh', width:'100%'}}>
        <GlobalStyle />

        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>

    </div>
);


ReactDom.render(<Root />, mainElement);