import Team from './Team';

class TeamTournamentResult {
    constructor(
        public teamId: number,
        public teamName: string,
        public wins: number,
        public looses: number,
        public draws: number,
        public points: number
    ) {}
}

export default TeamTournamentResult;