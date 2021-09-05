import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'antd';



class PageList extends Component{

    componentWillReceiveProps(nextProps){
        let url  = 'http://www.dell-lee.com/react/api/list.json';
        const id = nextProps.match.params.id;
        if(id){
            url = url + '?id='+ id
        }
        axios.get(url).then(res => {
            this.setState({
                data:res.data.data
            });
        })
    }

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    render(){
        return (<List
        style={{background: '#fff'}}
       
        dataSource={this.state.data}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />
      )
    }
    componentDidMount(){
      
    }
}

export default PageList;