import { observable, computed, autorun, action, whyRun } from "mobx";
import { OrganisationApi, TournamentApi, MatchApi, TeamApi } from "./Api";
import Organisation from './models/Organisation';
import Game from './models/Game';
import Tournament from './models/Tournament';
import Match from './models/Match';
import Team from './models/Team';
import TeamResult from './models/TeamResult';

class Store {
    @observable
    public organisations: Array<Organisation> = [];

    @observable
    public games: Array<Game> = [];

    @observable
    public activeTournaments: Array<Tournament> = [];

    constructor() {
        const orgApi = new OrganisationApi();
        const tournamentApi = new TournamentApi();

        orgApi.getOrganisations()
            .then(o => this.organisations = o);
        tournamentApi.getActiveTournaments()
            .then(t => this.activeTournaments = t);

        autorun(() => {
            this.organisations.forEach(o => {
                this.games = this.games.concat(o.games);
            });            
        });
    }

    getGame(gameId: number): Game {
        return this.games.find(g => g.id == gameId);
    }
}

const StoreObject = new Store();
export default StoreObject

class TournamentStore {
    private _tournamentApi: TournamentApi = new TournamentApi();
    private _matchApi: MatchApi = new MatchApi();
    private _teamApi: TeamApi = new TeamApi();
    private _store: Store;

    @observable
    currentTournament: Tournament;

    @observable
    public recentMatches: Array<Match> = [];

    @observable
    public teams: Array<Team> = [];

    constructor(storeObject: Store) {
        this._store = storeObject;
    }

    @action
    setCurrentTournament(tournamentId: number): void {
        this._tournamentApi.getTournament(tournamentId)
            .then(t => this.currentTournament = t);
        this._matchApi.getRecentMatches(tournamentId)
            .then(m => this.recentMatches = m);
        this._teamApi.getTeamsForTournament(tournamentId)
            .then(teams => this.teams = teams);
    }

    @computed
    get gameForTournament(): Game {
        if (this.currentTournament) {
            return this._store.getGame(this.currentTournament.gameId);
        }

        return null;
    }

    @computed
    get tournamentResults(): Array<TeamResult> {
        // Results will be fetched from server
        return this.teams.map(t => new TeamResult(t, 0, 0, 0, 0));
    }

    getTeam(teamId: number): Team {
        return this.teams.find(t => t.id == teamId);
    }
}

const TournamentStoreObject = new TournamentStore(StoreObject);
export { TournamentStoreObject as TournamentStore };