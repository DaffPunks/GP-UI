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

    set(state: State): void {
        this.timing = state.timing;
        this.isPlaying = state.isPlaying;
        this.src = state.src;
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
