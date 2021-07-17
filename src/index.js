import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import AppHead from './components/Header/index';

import './style.css';

const { Header, Footer, Content } = Layout;

class App extends Component {

    render() {
        return (
            <Layout style={{ minWidth: 1300 }}>
                <Header className="header"><AppHead/></Header>
                <Content className="content">Content</Content>
                <Footer className="footer">Footer</Footer>
            </Layout>
        )
    }

}

reactDom.render(<App />, document.getElementById('root'))