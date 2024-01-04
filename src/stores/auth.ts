import { makeAutoObservable } from "mobx";
import { authApi } from "src/api/auth";
import { TGetAccessRequestData } from "src/api/auth/types";

export class AuthStore {
  isAuth = true;

  constructor() {
    makeAutoObservable(this);
  }

  public getAccess = (data: TGetAccessRequestData): void => {
    authApi.getAccess(data).then((res) => console.log(res));
  };
}
