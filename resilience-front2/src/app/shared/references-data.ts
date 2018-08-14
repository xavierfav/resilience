import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ReferencesData implements InMemoryDbService {
  createDb() {
    let references = [
      { id: 0, name: 'Angular 1 by Krishna', url: 'www.angular1.com', description: 'dummy data', category: [{ id: 'psyduck-4' }, { id: 'horsea-5' }]},
      { id: 1, name: 'Angular 2 by Krishna', url: 'www.angular2.com', description: 'dummy data', category: [{ id: 'psyduck-4' }, { id: 'horsea-5' }]},
      { id: 2, name: 'Angular 3 by Krishna', url: 'www.angular3.com', description: 'dummy data', category: [{ id: 'psyduck-4' }, { id: 'horsea-5' }]},
      { id: 3, name: 'Angular 4 by Krishna', url: 'www.angular4.com', description: 'dummy data', category: [{ id: 'psyduck-4' }, { id: 'horsea-5' }]},
      { id: 4, name: 'Angular 5 by Krishna', url: 'www.angular5.com', description: 'dummy data', category: [{ id: 'psyduck-4' }, { id: 'horsea-5' }]}
    ];
    return {references};
  }

  genId(references): number {
    return references.length > 0 ? Math.max(...references.map(reference => reference.id)) + 1 : 1;
  }
} 