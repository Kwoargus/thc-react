import { makeAutoObservable } from "mobx";

export class CommonStore {
  constructor() {
    makeAutoObservable(this);
  }
}
