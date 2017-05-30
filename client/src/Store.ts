import { observable, computed, autorun, action, whyRun, IObservableArray } from "mobx";
import { OrganisationApi, TournamentApi, MatchApi, TeamApi } from "./Api";
import Organisation from './models/Organisation';
import Game from './models/Game';
import Tournament from './models/Tournament';
import Match from './models/Match';
import Team from './models/Team';
import TeamTournamentResult from './models/TeamTournamentResult';

class Store {
    private readonly _orgApi = new OrganisationApi();
    @observable
    public organisations: Array<Organisation> = [];

    @observable
    public games: Array<Game> = [];

    constructor() {
        
        const tournamentApi = new TournamentApi();

        this._orgApi.getOrganisations()
            .then(o => this.organisations = o);

        autorun(() => {
            let games: Array<Game> = [];
            this.organisations.forEach(o => {
                games = games.concat(o.games.slice());
            });      

            this.games = games;    
        });
    }

    refresh(){
         this._orgApi.getOrganisations()
            .then(o => this.organisations = o);
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
    public teamsTournamentResults: Array<TeamTournamentResult> = [];

    //@observable
    //public teams: Array<Team> = [];

    constructor(storeObject: Store) {
        this._store = storeObject;
    }

    @action
    setCurrentTournament(tournamentId: number): void {
        this._tournamentApi.getTournament(tournamentId)
            .then(t => this.currentTournament = t);
        this._matchApi.getRecentMatches(tournamentId)
            .then(m => this.recentMatches = m);
        this._tournamentApi.getTeamsTournamentResults(tournamentId)
            .then(t => this.teamsTournamentResults = t);
        // this._teamApi.getTeamsForTournament(tournamentId)
        //     .then(teams => this.teams = teams);
    }

    @computed
    get gameForTournament(): Game {
        if (this.currentTournament) {
            return this._store.getGame(this.currentTournament.gameId);
        }

        return null;
    }
}

const TournamentStoreObject = new TournamentStore(StoreObject);
export { TournamentStoreObject as TournamentStore };