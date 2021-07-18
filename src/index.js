import React, { Component, Fragment } from 'react';
import reactDom from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppHead from './components/Header/index';

import './style.css';
import List from './containers/List';
import Detail from './containers/Detail';

const { Header, Footer, Content } = Layout;

class App extends Component {

    render() {
        return (
            <Layout style={{ minWidth: 1300 }}>
                <Header className="header"><AppHead/></Header>
                <Content className="content">
                    <BrowserRouter>
                    <Switch>
                    <Route path='/detail' component={Detail} />
                    <Route path='/' component={List} />  
                    </Switch>
                    </BrowserRouter>
                </Content>
                <Footer className="footer">Footer</Footer>
            </Layout>
        )
    }

}

reactDom.render(<App />, document.getElementById('root'))