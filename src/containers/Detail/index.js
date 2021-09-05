import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import './style.css'


class Detail extends Component{

    constructor(props){
        super(props);
        this.state = {
            title:'',
            content: ''
        }
    }

    render(){
        return ( <Card title={this.state.title}>
            <div className="detail" dangerouslySetInnerHTML={{__html:this.state.content }}></div>
      </Card>)
    }
    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/detail.json?id=1').then((res)=>{
            this.setState({
                title: res.data.data.title,
                content: res.data.data.content
            })
        })
    }
}

export default Detail;