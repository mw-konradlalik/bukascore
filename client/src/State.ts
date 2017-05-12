import Tournament from './models/Tournament'
import { observable, action, computed } from 'mobx'
import { TournamentApi } from './Api'
import Store from './Store';

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
