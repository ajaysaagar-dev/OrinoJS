

export default class __ReactiveState {

    state = 0;

    constructor(initial = 0) {
        this.state = initial;
    }

    increment(value = 1) {
        this.state = this.state + value;
    }

    decrement(value = 1) {
        this.state = this.state - value;
    }
}