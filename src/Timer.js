import React from 'react'

class Timer extends React.Component {

    state = {
        count: 0
    }

    componentDidMount(){
        this.myInterval = setInterval(()=> {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }

    render(){
        return(
            <div>
                Current Time: {this.state.count}
            </div>
        )
    }
}

export default Timer