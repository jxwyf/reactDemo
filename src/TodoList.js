import React, { Component } from 'react';

import TodoItem from './TodoItem';


//生命周期函数指的是组件在某一刻会自动执行的函数

class TodoList extends Component {

    // 最先被执行
    // constructor 在组件创建的第一个时刻自动运行
    constructor(props) {
        super(props);
        //定义数据 在组件中创建了两个数据 数据一定定义在state中
        this.state = {
            inputValue: '',
            list: []
        }
    }

    //挂载前自动执行
    componentWillMount() {

    }


    //挂载后自动执行
    componentDidMount() {

    }

    //更新前自动执行
    shouldComponentUpdate() {
        return true;
    }






    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleKeyUp(e) {
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list: list,
                inputValue: ''
            })

        }
    }

    handleItemClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        // setState是异步的
        this.setState({
            list: list
        })
    }

    getListItems() {
        return this.state.list.map((value, index) => {
            return <TodoItem content={value} />
        })
    }

    //当组件初次创建的时候 render函数会被执行一次
    // 当state数据发生变更的时候 render函数会被重新执行
    // 当props数据发生变更的时候 render函数会被重新执行
    render() {
        return (
            <div>
                <input value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                    onKeyUp={this.handleKeyUp.bind(this)} />
                <ul>
                    {this.getListItems()}
                </ul>
            </div>
        );
    }
}

export default TodoList;