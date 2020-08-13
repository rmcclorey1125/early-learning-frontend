import React from 'react'

class MatchCards extends React.Component {

    state = {
    }

    // changeFlip = () =>
    // this.setState({flip: !this.state.flip})

    render() {
        // console.log(this.props)
        return (
            <>
                <div className="card">
                    <div>
                        <img src={this.props.number} />
                    </div>
                </div>
            
                <div className="card">
                    <div>
                        <img src={this.props.picture} />
                    </div>
                </div>
            </>
        )
    }
}

export default MatchCards