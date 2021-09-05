import React, { Component } from 'react';
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
            <BrowserRouter>
            <Layout style={{ minWidth: 1300, height:"100%" }}>
                <Header className="header"><AppHead/></Header>
                <Content className="content">
                    
                    <Switch>
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/:id?' component={List} />  
                    </Switch>
                    
                </Content>
                <Footer className="footer">@copyright 刘唯卿 2021</Footer>
            </Layout>
            </BrowserRouter>
        )
    }

}

reactDom.render(<App />, document.getElementById('root'))