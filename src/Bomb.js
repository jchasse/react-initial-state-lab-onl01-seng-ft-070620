import React, {Component} from 'react'

class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    explosion = () => {
        return this.state.secondsLeft === 0? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    }

    render() {
        return <div>{this.explosion()}</div>
    }
}

export default Bomb