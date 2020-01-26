import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  public groups: {
    [group: string]: {
      show: boolean
    }
  } = {};

  constructor() { }
}
