import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Use BehaviorSubject for initial value

@Injectable({  providedIn: 'root'})
export class NamesService {
  private namesSource = new BehaviorSubject<string[]>(['Initial Name']); // Initial value
  currentNames = this.namesSource.asObservable(); // Expose as an Observable

  updateNames(names: string[]) {
    this.namesSource.next(names); // Update the names
  }
}
