import { makeAutoObservable } from "mobx";
import { backApi } from "src/api/back";
import { TGetAccessRequestData } from "src/api/auth/types";

export class BackStore {
    isBack = true;

    constructor() {
        makeAutoObservable(this);
    }

    public getAccess = (data: TGetAccessRequestData): void => {
        backApi.getAccess(data).then((res) => console.log(res));
    };
}