import Organisation from './models/Organisation';
import Game from './models/Game';
import Tournament from './models/Tournament';
import Match from './models/Match';
import Team from './models/Team';

export class OrganisationApi {
    getOrganisations(): Promise<Array<Organisation>> {
        return Promise.resolve([
            new Organisation(1, 'PZPN', [
                new Game(1, 'Ekstraklasa'),
                new Game(2, 'Puchar Polski')
            ]),
            new Organisation(2, 'FIFA', [
                new Game(3, 'World Cup'),
                new Game(4, 'Confederations Cup'),
                new Game(5, 'Club World Cup')
            ])
        ]);
    }
}

export class TournamentApi {
    getActiveTournaments(): Promise<Array<Tournament>> {
        return Promise.resolve([
           new Tournament(1, 1, 'Sezon 2017', new Date(2017, 1, 1), new Date(2017, 12, 31), []),
           new Tournament(2, 1, 'Sezon 2016', new Date(2016, 1, 1), new Date(2016, 12, 31), []),
           new Tournament(3, 3, 'World Cup 2018', new Date(2018, 6, 1), new Date(2018, 7, 31), []) 
        ]);
    }

    getTournament(tournamentId: number): Promise<Tournament> {
        return Promise.resolve(new Tournament(1, 1, 'Sezon 2017', new Date(2017, 1, 1), new Date(2017, 12, 31), []))
    }
}

export class MatchApi {
    getRecentMatches(tournamentId: number): Promise<Array<Match>> {
        return Promise.resolve([
            new Match(1, 1, 2, 2, 0),
            new Match(2, 2, 1, 3, 0)
        ]);
    }
}

export class TeamApi {
    getTeamsForGame(gameId: number): Promise<Array<Team>> {
        return Promise.resolve([
            new Team(1, 'Wisła Kraków', 1),
            new Team(2, 'Legia Warszawa', 1),
            new Team(3, 'Sandecja Nowy Sącz', 1),
            new Team(4, 'Arka Gdynia', 1)
        ])
    }

    getTeamsForTournament(tournamentId: number): Promise<Array<Team>> {
        return Promise.resolve([
            new Team(1, 'Wisła Kraków', 1),
            new Team(2, 'Legia Warszawa', 1),
            new Team(3, 'Sandecja Nowy Sącz', 1),
            new Team(4, 'Arka Gdynia', 1)
        ])
    }
}