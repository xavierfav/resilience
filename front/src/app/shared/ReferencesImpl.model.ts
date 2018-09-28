import { References } from './references.model';

export class ReferencesImpl implements References {
    id: number;
    name: String;
    url: String;
    description: String;
    // category: String[]


    constructor(references: References) {
        this.id = references.id;
        this.name = references.name;
        this.url = references.url;
        this.description = references.description;
        // this.category = references.category;
    }
}
