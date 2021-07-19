import { Plan } from './Plan';
export class User {
    constructor(public username? : string ,
                 public plans : Plan[] = []) {
    }

    getPlan(id : number | string) : Plan | undefined {
        return this.plans?.find(plan => plan.id === id)
    }
}