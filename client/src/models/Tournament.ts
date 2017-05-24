import Team from './Team';

export default class Tournament {
    constructor(
        public id: number,
        public gameId: number,
        public name: string,
        public startDate: Date,
        public endDate: Date, 
        public teams: Array<Team>
    ) { }
}