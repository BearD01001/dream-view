import React, { Component } from 'react';
import moment from 'moment';

class Clock extends Component {
    constructor() {
        super();
        // 时钟格式，空格分开方便拆分 格式参考：http://momentjs.com/docs/#/displaying/
        // TODO：设置项
        let clockFormat = 'YYYY MMM DD HH mm ss ddd DDD';
        // End - TODO
        
        this.format = this.initClockFormat(clockFormat);
        this.state = {
            clock: this.nowClock(),
            format: this.format
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                clock: this.nowClock()
            })
        }, 1000);
    }

    initClockFormat(clockFormat) {
        const exps = {
            year: /\b(YYYY|YY|Y)\b/g,
            month: /\b(MMMM|MMM|MM|Mo|M)\b/g,
            dayOfYear: /\b(DDDD|DDDo|DDD)\b/g,
            day: /\b(DD|Do|D)\b/g,
            hour: /\b(HH|H|hh|h|kk|k)\b/g,
            minute: /\b(mm|m)\b/g,
            second: /\b(ss|s)\b/g,
            dayOfWeek: /\b(dddd|ddd|dd|do|d)\b/g,
            AP: /\b(a|A)\b/g,
        };
        let defaultFormat = {
            year: 'YYYY',
            month: 'MMMM',
            day: 'DD',
            hour: 'HH',
            minute: 'mm',
            second: 'ss',
            dayOfWeek: 'dddd',
            dayOfYear: 'DDDD',
            AP: 'A',
        };
        let format = {};

        for(let i = 0, keys = Object.keys(exps), l = keys.length; i < l; i++) {
            let key = keys[i],
                exp = exps[key];

            if(exp.test(clockFormat)) {
                format[key] = clockFormat.match(exp)[0];
            }
        }

        return Object.assign(defaultFormat, format);
    }

    nowClock() {
        const now = moment();
        let clock = {};

        for(let i = 0, keys = Object.keys(this.format), l = keys.length; i < l; i++) {
            let key = keys[i];

            clock[key] = now.format(this.format[key]);
        }

        return clock;
    }

    render() {
        const clock = this.state.clock;

        return <div id="clock" className="default">
            <div className="hour">{ clock.hour }</div>
            <div className="colon-1">:</div>
            <div className="minute">{ clock.minute }</div>
            <div className="colon-2">:</div>
            <div className="second">{ clock.second }</div>
            <div className="ap">{ clock.ap }</div>
            <div className="year">{ clock.year }</div>
            <div className="month">{ clock.month }</div>
            <div className="day">{ clock.day }</div>
            <div className="dayOfWeek">{ clock.dayOfWeek }</div>
            <div className="dayOfYear">{ clock.dayOfYear }</div>
        </div>
    }
}

export default Clock;