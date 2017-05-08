import { observable } from "mobx";
import { OrganisationApi } from "./Api";
import Organisation from './models/Organisation';
import Game from './models/Game';

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