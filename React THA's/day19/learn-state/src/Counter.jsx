import React from 'react'


class Counter extends React.Component {

    constructor() {
       super()
       this.state = {
           count: 0
       } 
    }
    
    handleClick = () => {
        console.log("clicked");
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return( 
            <button className="counter-btn" onClick={this.handleClick}>{this.state.count}</button>
        )
    }

}

export default Counter