import React, { Component } from 'react';
import axios from 'axios';
import { List } from 'antd';
import { Link } from 'react-router-dom';



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
        renderItem={item => <List.Item>
            <Link to={`/detail/${item.id}`}>
            {item.title}
            </Link>
            </List.Item>}

      />
      )
    }
    componentDidMount(){
      
    }
}

export default PageList;