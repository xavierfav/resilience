import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ReferencesData implements InMemoryDbService {
  createDb() {
    let references = [
      { id: 1, name: 'Angular 1 by Krishna', url: 'www.angular1.com', description: 'dummy data', category: [] },
      { id: 2, name: 'Angular 2 by Krishna', url: 'www.angular2.com', description: 'dummy data', category: [] },
      { id: 3, name: 'Angular 3 by Krishna', url: 'www.angular3.com', description: 'dummy data', category: [] },
      { id: 4, name: 'Angular 4 by Krishna', url: 'www.angular4.com', description: 'dummy data', category: [] },
      { id: 5, name: 'Angular 5 by Krishna', url: 'www.angular5.com', description: 'dummy data', category: [] },
    ];
    return {references};
  }

  genId(references): number {
    return references.length > 0 ? Math.max(...references.map(hero => hero.id)) + 1 : 1;
  }
} 