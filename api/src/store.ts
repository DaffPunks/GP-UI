import {State} from 'shared/models';

class StateStore implements State {
    timing: number;
    isPlaying: boolean;
    src: string;

    constructor() {
        this.timing = 0;
        this.isPlaying = false;
        this.src = undefined;
    }

    setBatch(state: State): void {
        this.timing = state.timing;
        this.isPlaying = state.isPlaying;
        this.src = state.src;
    }

    set(state: Partial<State>): void {
        Object.keys(state).forEach((key) => {
            this[key] = state[key];
        });
    }

    get(): State {
        return {
            timing: this.timing,
            isPlaying: this.isPlaying,
            src: this.src,
        }
    }
}

export default new StateStore();
