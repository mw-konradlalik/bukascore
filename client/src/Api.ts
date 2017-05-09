import Organisation from './models/Organisation';
import Game from './models/Game';
import Tournament from './models/Tournament';

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
}