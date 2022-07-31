import React from "react";
import { useState, useEffect } from "react";

class Countdown extends React.Component {
    state = {
        count: 10

    }
    componentDidMount() {
        this.timer = setInterval(() => {

            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.count !== prevState.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                //  this.props.timeend();
            }
        }
    }

    render() {
        return (

            <>

                <div>(class component) Countdown {this.state.count}</div>


            </>



        )

    }



}




const NewCountdown = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            props.timeend()
            return;
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (

        <div>(HOOK):{count} </div>
    )
}


export { Countdown, NewCountdown };