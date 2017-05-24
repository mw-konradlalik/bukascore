import Tournament from './models/Tournament'
import { observable, action, computed } from 'mobx'
import { TournamentApi, OrganisationApi } from './Api'
import Store from './Store';
import Organisation from './models/Organisation';

export class HomeState {

    private _tournamentApi: TournamentApi = new TournamentApi();

    @observable
    public tournaments: Array<Tournament> = [];

    @observable
    public gameId: number;

    @computed
    public get tournamentListHeader(): string {
        if (Number.isInteger(this.gameId)) {
            const game = Store.getGame(this.gameId);
            if (game) {
                return game.name;
            }
            return "";
        }

        return 'Active tournaments';
    }

    @action
    setGame(gameId: number) {
        this.gameId = gameId;

        if (Number.isInteger(gameId)) {
            this._tournamentApi.getTournametsForGame(gameId).then(t => this.tournaments = t);
        } else {
            this._tournamentApi.getActiveTournaments().then(t => this.tournaments = t);
        }
    }
}

export class OrganisationsState {
    private readonly _organisationApi: OrganisationApi = new OrganisationApi();

    constructor() {
        this.saveNewOrganisation = this.saveNewOrganisation.bind(this);
        this.removeOrganisation = this.removeOrganisation.bind(this);
    }

    @observable
    public showNewOrganisationForm: boolean = false;

    @observable
    public newOrganisationName: string = '';

    @observable
    public validationErrors: Array<string> = [];

    @action.bound
    displayNewOrganisationForm() {
        this.showNewOrganisationForm = true;
    }

    @action.bound
    hideNewOrganisationForm() {
        this.showNewOrganisationForm = false;
    }

    @action.bound
    setNewOrganisationName(name: string) {
        this.newOrganisationName = name;
    }

    saveNewOrganisation() {
        const newOrg = new Organisation(0, this.newOrganisationName, []);
        this._organisationApi.createNewOrganisation(newOrg)
            .then(result => {
                if (result.errors.length === 0 && result.savedModel) {
                    this.hideNewOrganisationForm();
                    this.setNewOrganisationName('');
                    Store.refresh();
                } else {
                    this.validationErrors = result.errors;
                }
            }).catch(e => alert(e));
    }

    removeOrganisation(organisationId: number) {
        this._organisationApi.removeOrganisation(organisationId)
            .then(result => {
                if (result.errors.length === 0) {
                    Store.refresh();
                } else {
                    this.validationErrors = result.errors;
                    alert(result.errors.join('\n'));
                }
            }).catch(e => alert(e));
    }

    editOrganisation(organisation: Organisation) {
        this._organisationApi.editOrganisation(organisation)
        .then(result => {
            if (result.errors.length === 0){
                Store.refresh();
            } else {
                    this.validationErrors = result.errors;
                    alert(result.errors.join('\n'));
                }
            }).catch(e => alert(e)); 
    }
}

export class OrganisationState {
    constructor(organisation: Organisation) {
        this.organisation = organisation;
    }

    @observable
    public organisation: Organisation;

    //@observable
    //public organisationName: string = ''

    @observable
    public isEditable: boolean = false;

    @action.bound
    cancelEdit() {

    }

    @action.bound
    setOrganisationName(name: string) {
        //this.organisationName = name;
        this.organisation.name = name;
    }

    @action.bound
    makeEditable() {
        this.isEditable = true;
    }
}