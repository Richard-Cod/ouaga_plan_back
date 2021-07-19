import { PlanBuilder } from './../entities/PlanBuilder';
import { JoiPlanValidator } from './../Validators/JoiPlanValidator';
import { PlanValidator } from './../contracts/PlanValidator';
import { InMemoryPlansRepository } from './../database/InMemoryPlansRepository';
import { PlansRepository } from './../contracts/PlansRepository';


export class ContractConfiguration{
    public planRepository : PlansRepository
    public planValidator : PlanValidator

    constructor(){
        this.planRepository  = new InMemoryPlansRepository()
        this.planValidator = new JoiPlanValidator()

        
        this.planRepository.populate([
            new PlanBuilder().withTitle("title1").withId(1).build(),
            new PlanBuilder().withTitle("title2").withId(2).build(),
            new PlanBuilder().withTitle("title3").withId(3).build(),
          ])
    }
}