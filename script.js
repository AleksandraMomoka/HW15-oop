class Clock {
    constructor(clock) {
        this.clock = clock;
    }
    render() {
        this.clock.innerHTML = this.getTime();
    }
    getTime() {
        let isFullTime = this.clock.classList.contains('isFull');
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
    
        if(isFullTime) {
            return `${hours}:${minutes}:${seconds}`;
        } else {
            return `${hours}:${minutes}`;
        }
    }
    
}

class ShortTimeFormat extends Clock {
    constructor(clock) {
        super(clock);
        clock.addEventListener('click', () => this.clock.classList.toggle('isFull'));
    }
}

class FullTimeFormat extends Clock {
    constructor(clock) {
        super(clock);
        clock.addEventListener('click', () => this.clock.classList.toggle('isShort'));
    }
    getTime() {
        let isShortTime = this.clock.classList.contains('isShort');
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
    
        if(isShortTime) {
            return `${hours}:${minutes}`;
        } else {
            return `${hours}:${minutes}:${seconds}`;
        }
    }
}

let shortTimeBlock = document.getElementById('short-time');
let fullTimeBlock = document.getElementById('full-time');

let shortTimeFormat = new ShortTimeFormat(shortTimeBlock);
let fullTimeFormat = new FullTimeFormat(fullTimeBlock);

setInterval(() => shortTimeFormat.render(), 250);
setInterval(() => fullTimeFormat.render(), 250);