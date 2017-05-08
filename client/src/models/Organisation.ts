import Game from './Game';

export default class Organisation {
    constructor(
        public id: number,
        public name: string,
        public games: Array<Game>
    ) {}
}