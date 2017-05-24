export default class Match {
    constructor(
        public id: number,
        public homeTeamId: number,
        public homeTeamName: string,
        public awayTeamId: number,
        public awayTeamName: string,
        public homeScore: number,
        public awayScore: number
    ){}
}