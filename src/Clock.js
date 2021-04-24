import React from 'react';
import './App.css';

class Clock extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
}

    componentDidMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidUpdate() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time', time)
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/1000/3600)%24);
        const days = Math.floor((time/1000/3600/24))

        console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }

    leadingZero(num){
        return num < 10 ? '0' + num : num;
    }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.leadingZero(this.state.days)} Day(s) </div>
                <div className="Clock-hours">{this.leadingZero(this.state.hours)} Hour(s) </div>
                <div className="Clock-mins">{this.leadingZero(this.state.minutes)} Minute(s) </div>
                <div className="Clock-secs">{this.leadingZero(this.state.seconds)} Second(s) </div>
            </div>
        )
    }
}

export default Clock;