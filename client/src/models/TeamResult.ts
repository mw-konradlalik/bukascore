import Team from './Team';

class TeamResult {
    constructor(
        public team: Team,
        public wins: number,
        public losses: number,
        public draws: number,
        public points: number
    ) {}
}

export default TeamResult;