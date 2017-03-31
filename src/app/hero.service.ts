import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() // Tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to injecct other dependencies into this service.
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}