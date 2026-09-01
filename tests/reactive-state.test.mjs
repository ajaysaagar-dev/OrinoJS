import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

// Simple JS mock matching __ReactiveState logic
class ReactiveState {
    constructor(initial = 0) {
        this.state = initial;
    }
    increment(value = 1) {
        this.state += value;
    }
    decrement(value = 1) {
        this.state -= value;
    }
}

describe('ReactiveState', () => {
    it('initializes with default value 0', () => {
        const state = new ReactiveState();
        assert.equal(state.state, 0);
    });

    it('initializes with custom value', () => {
        const state = new ReactiveState(42);
        assert.equal(state.state, 42);
    });

    it('increments correctly', () => {
        const state = new ReactiveState(10);
        state.increment();
        assert.equal(state.state, 11);
        state.increment(5);
        assert.equal(state.state, 16);
    });

    it('decrements correctly', () => {
        const state = new ReactiveState(20);
        state.decrement();
        assert.equal(state.state, 19);
        state.decrement(10);
        assert.equal(state.state, 9);
    });
});
