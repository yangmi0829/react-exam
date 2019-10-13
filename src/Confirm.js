import React from 'react'
import ReactDOM from "react-dom";

let node = null
const confirm = async (message) => {
    return new Promise((resolve, reject) => {
        node = document.createElement('div')
        document.body.appendChild(node)
        ReactDOM.render(<Confirm message={message} resolve={resolve} reject={reject}/>, node)
    })
}

class Confirm extends React.Component{
    constructor(props) {
        super(props);
    }

    hide(){
        if(node){
            ReactDOM.unmountComponentAtNode(node)
            document.body.removeChild(node)
        }
    }
    submit(){
        this.props.resolve(true)
        this.hide()
    }
    cancel(){
        this.props.resolve(false)
        this.hide()
    }
    render() {
        return (
            <div>
                <div>{this.props.message}</div>
                <button onClick={e => this.submit()}>确认</button>
                <button onClick={e => this.cancel()}>取消</button>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
    }
    async componentDidMount() {
        let res = await confirm('确认删除?')
        if(res){
            alert('是')
        }else{
            alert('否')
        }
    }
    render() {
        return (
            <div>
                confirm
            </div>
        )
    }
}

export default App
