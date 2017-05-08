import Organisation from './models/Organisation';

export class OrganisationApi {
    getOrganisations(): Promise<Array<Organisation>> {
        return Promise.resolve([
            new Organisation(1, 'PZPN', []),
            new Organisation(2, 'FIFA', [])
        ]);
    }
}