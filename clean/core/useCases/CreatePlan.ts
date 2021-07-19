import { PlansRepository } from './../contracts/PlansRepository';
import { User } from './../entities/User';
import { Plan } from './../entities/Plan';
export class CreatePlan {
    constructor(public user : User , public plan : Plan) {
    }

    async execute(plansRepo : PlansRepository) : Promise<Plan> {
        await plansRepo.createPlan(this.plan)
        this.user.plans?.push(this.plan)
        return this.plan
    }
}