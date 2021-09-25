import { User } from './User';
import { Plan } from './Plan';
export class PlanBuilder {
    private plan : Plan
    
    constructor() {
        this.plan = new Plan()
    }
    
    withId(id : string | number): PlanBuilder {
        this.plan.id = id
        return this
    }
    
    withAuthor(user : User): PlanBuilder {
        this.plan.author = user
        return this
    }
    
    withInvited(invited : User[]): PlanBuilder {
        this.plan.invited = invited
        return this
    }
    
    withTitle(title : string): PlanBuilder {
        this.plan.title = title
        return this
    }
    
    withDescription(description : string): PlanBuilder {
        this.plan.description = description
        return this
    }
    
    withDate(date : Date): PlanBuilder {
        this.plan.date = date
        return this
    }
    withCovImage(covImage: string) {
        this.plan.covImage = covImage;
        return this
    }
    
    build() : Plan {
        return this.plan
    }
}