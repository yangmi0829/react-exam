import React, {useState} from 'react'

class InputNumber extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            val: ''
        }
    }
    get isControl(){
        return 'value' in this.props
    }

    get value() {
        if(this.isControl){
            return this.props.value
        } else {
            return this.state.val
        }
    }

    render() {
        return (
            <input value={this.value} onChange={e => {
                if(!this.isControl){
                    this.setState({
                        val: e.target.value
                    })
                }
                this.props.onchange(e)
            }}/>
        )
    }
    componentDidMount() {
        this.setState({
            val: this.props.defaultValue
        })
    }
}
function App() {
    const [value, setValue] = useState('aaa')
    let val = value
    return (
        <div>
            <InputNumber value={value} onchange={e => {
                setValue( e.target.value)
            }}></InputNumber>
            <InputNumber defaultValue={value} onchange={ e => {
                val = e.target.value
            }}></InputNumber>
        </div>
    )
}
export default App
