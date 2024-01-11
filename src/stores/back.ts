import { makeAutoObservable } from "mobx";
import { backApi } from "src/api/back";
import { TGetBackTaskFactors } from "src/api/back/types";

export class BackStore {
    accValue = 10;

    constructor() {
        makeAutoObservable(this);
    }

    public getAccess = (data: TGetBackTaskFactors): void => {
        backApi.getAccess(data).then((res) => console.log(res));
    };
}