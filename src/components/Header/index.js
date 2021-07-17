/* eslint-disable jsx-a11y/alt-text */
import { Menu } from 'antd';
import React, { Component, Fragment } from 'react';
import axios from 'axios';

import logo from './logo.png';
import './style.css'


class AppHead extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    getMenuItems(){
         return this.state.list.map(item =>{
             return(
                 <Menu.Item key={item.id}>
                     {item.title}
                 </Menu.Item>
             )
         })
    }
    //生命周期函数 发送ajax请求
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json').then((res)=>{
            //给list赋值
            this.setState({
                list:res.data.data
            })
        })
    }


    render() {
        return (
            <Fragment>
            <img src={logo} className='app-header-logo'/>
            <Menu mode="horizontal" className='app-header-menu'>
                {this.getMenuItems()}
                </Menu>
        </Fragment>  
        )
    }
}

export default AppHead;