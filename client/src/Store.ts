import { observable } from "mobx";
import { OrganisationApi, TournamentApi } from "./Api";
import Organisation from './models/Organisation';
import Game from './models/Game';
import Tournament from './models/Tournament';

class Store {
    @observable
    public organisations: Array<Organisation>;

    @observable
    public games: Array<Game>;

    constructor() {
        this.games = [];
        this.organisations = [];

        const orgApi = new OrganisationApi();
        orgApi.getOrganisations()
            .then(o => this.organisations = o);
    }
}

export default new Store();

class TournamentStore {
    @observable
    public activeTournaments: Array<Tournament>;

    constructor() {
        this.activeTournaments = [];
        const tournamentApi = new TournamentApi();
        tournamentApi.getActiveTournaments()
            .then(t => this.activeTournaments = t);
    }
}

const TournamentStoreObject = new TournamentStore();
export { TournamentStoreObject as TournamentStore };