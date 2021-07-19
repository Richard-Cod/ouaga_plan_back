import { Plan } from './../entities/Plan';
import { PlansRepository } from './../contracts/PlansRepository';
export class InMemoryPlansRepository implements PlansRepository {

    
    delete(id: number | string) : Boolean {
        let plan : Plan | undefined  =  this.getPlan(id)
        if (!plan) throw new Error("Plan does not exist");
        this.plans = this.plans.filter((plan) => plan?.id != id)
        return true
    }
    update(id: number | string, data: any)  : Plan | undefined{

      let plan : Plan | undefined  =  this.getPlan(id)

      if (!plan) throw new Error("Plan does not exist");

      const index = this.plans.findIndex((value) => value.id == id)
      this.plans[index] = {...plan , ...data}
      
      return {...plan , ...data}
    }
    private plans : Plan[]

    constructor() {
        this.plans = []
    }

    populate(data : Plan[]){
        this.plans = data
    }

    getAll() : Plan[] {
        return this.plans
    }
    createPlan(plan : Plan): Plan {
        plan.id = this.plans.length + 1
        this.plans.push(plan);
        return plan
    }
    getPlan(id: string | number): Plan | undefined {
        const plan = this.plans.find(plan => plan.id == id);
        if (!plan) throw new Error("Plan does not exist");
        return plan
    }
}