import Organisation from './models/Organisation';
import Game from './models/Game';
import Tournament from './models/Tournament';
import Match from './models/Match';
import Team from './models/Team';
import TeamTournamentResult from './models/TeamTournamentResult';
import {SaveResult, RemoveResult} from './common/ResponseResult';

const baseApiUrl = 'http://localhost:5000/api'

const jsonHeaders = new Headers();
jsonHeaders.append('Content-Type', 'application/json');


export class OrganisationApi {
    getOrganisations(): Promise<Array<Organisation>> {
        return fetch(`${baseApiUrl}/organisations`)
            .then(response => response.json() as Promise<Array<Organisation>>);
    }

    createNewOrganisation(organisation: Organisation): Promise<SaveResult<Organisation>> {

        return fetch(`${baseApiUrl}/organisations`, {
            method: 'post',
            body: JSON.stringify(organisation),
            headers: jsonHeaders
        }).then(response => {
            if (response.ok || response.status === 400) {
                return response.json() as Promise<SaveResult<Organisation>>;
            } else {
                throw new Error(response.status.toString());
            }
        })
    }

    removeOrganisation(organisationId: number): Promise<RemoveResult> {
        return fetch(`${baseApiUrl}/organisations/${organisationId}`, {
            method: 'delete'
        }).then(response => {
            if(response.ok || response.status === 400) {
                return response.json() as Promise<RemoveResult>;
            } else {
                throw new Error(response.status.toString());
            }
        })
    }

    editOrganisation(organisation: Organisation): Promise<SaveResult<Organisation>> {
        return fetch(`${baseApiUrl}/organisations/${organisation.id}`, {
            method: 'put',
            body: JSON.stringify(organisation),
            headers: jsonHeaders
        }).then(response => {
            if (response.ok || response.status === 400) {
                return response.json() as Promise<SaveResult<Organisation>>
            } else {
                throw new Error(response.status.toString())
            }
        })
    }
}

export class GameApi {
    readonly gameApiUrl = `${baseApiUrl}/games`;

    createNewGame(game: Game): Promise<SaveResult<Game>> {
        return fetch(`${this.gameApiUrl}`, {
            method: 'post',
            body: JSON.stringify(game),
            headers: jsonHeaders
        }).then(response => {
            if(response.ok || response.status === 400) {
                return response.json() as Promise<SaveResult<Game>>
            } else {
                throw new Error(response.status.toString());
            }
        })
    }
}

export class TournamentApi {
    readonly tournamentApiUrl = `${baseApiUrl}/tournaments`;

    getActiveTournaments(): Promise<Array<Tournament>> {
        return fetch(`${this.tournamentApiUrl}/active`)
            .then(response => response.json() as Promise<Array<Tournament>>);
    }

    getTournament(tournamentId: number): Promise<Tournament> {
        return fetch(`${this.tournamentApiUrl}/${tournamentId}`)
            .then(response => response.json() as Promise<Tournament>);
    }

    getTournametsForGame(gameId: number): Promise<Array<Tournament>> {
        return fetch(`${baseApiUrl}/tournaments/game/${gameId}`)
            .then(response => response.json() as Promise<Array<Tournament>>);
    }

    getTeamsTournamentResults(tournamentId: number): Promise<Array<TeamTournamentResult>> {
        return fetch(`${this.tournamentApiUrl}/${tournamentId}/results`)
            .then(response => response.json() as Promise<Array<TeamTournamentResult>>);
    }
}

export class MatchApi {
    readonly matchesApiUrl = `${baseApiUrl}/matches`;

    getRecentMatches(tournamentId: number): Promise<Array<Match>> {
        return fetch(`${this.matchesApiUrl}/tournament/${tournamentId}`)
        .then(response => response.json() as Promise<Array<Match>>);
    }
}

export class TeamApi {
}