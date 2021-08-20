// Write your code here
import {Component} from 'react'
import './index.css'
class FruitsCounter extends Component{
    state = { key1 : 0, key2 : 0 }
    onMango = ()=>{
        const{key1}=this.state
        this.setState((prevState) => ({ key1: prevState.key1 + 1 }))
    }
    onBanana = ()=>{
        const{key2}=this.state
        this.setState((prevState) => ({ key2: prevState.key2 + 1 }))
    }
    render(){
        const{key1,key2} = this.state
        return(
            <div className="bg">
                <div className="card1">
                    <h1 className="h1">Bob ate <span>{key1}</span>mangoes<span>{key2}</span>bananas</h1>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" className="img"/>
                        <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" className="img"/>
                    </div>
                    <div>
                        <button className="button1" onClick={this.onMango}>Eat Mango</button>
                        <button className="button1" onClick={this.onBanana}>Eat Banana</button>
                    </div>
                </div>
            </div>
        )
    }
}