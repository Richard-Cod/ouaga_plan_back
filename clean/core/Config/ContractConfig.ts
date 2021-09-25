import { User } from './../entities/User';
import { PlanBuilder } from './../entities/PlanBuilder';
import { JoiPlanValidator } from './../Validators/JoiPlanValidator';
import { PlanValidator } from './../contracts/PlanValidator';
import { InMemoryPlansRepository } from './../database/InMemoryPlansRepository';
import { PlansRepository } from './../contracts/PlansRepository';
import { Plan } from '../entities/Plan';


const defaultUserAsJson = [
    {
        "id": 1,
        "username": "Richard",
        "profilePic": "https://picsum.photos/200/300"
      },
      {"id": 2, "username": "Jamal", "profilePic": "https://picsum.photos/200/300"},
      {
        "id": 3,
        "username": "Aristide",
        "profilePic": "https://picsum.photos/200/300"
      },
      {
        "id": 4,
        "username": "Kenneth",
        "profilePic": "https://picsum.photos/200/300"
      },
]

const defaultPlansAsjson = [
    {
      "id": 1,
      "title": "Plan A",
      "description":
          "Description A ",
      "date": "2021-08-05",
      "covImage": "http://www.fasozine.com/images/SOCIETE/Bouzout1.jpg"
    },
    {
      "id": 2,
      "title": "Plan B",
      "description": "Description B",
      "date": "2021-08-05",
      "covImage":"https://picsum.photos/200/300"
    },
    {
      "id": 3,
      "title": "Plan C",
      "description": "Description C",
      "date": "2021-09-12",
      "covImage": "https://picsum.photos/200/300"
    },
]

const defaultUsers = defaultUserAsJson.map((user : any ) : User => {
    return  new User(user.id , user.username , user.profilePic )
    }  ) 

const defaultPlans = defaultPlansAsjson.map((plan : any , index) : Plan => {
           return  new PlanBuilder()
                .withTitle(plan.title)
                .withId(plan.id)
                .withDescription(plan.description)
                .withCovImage(plan.covImage)
                .withAuthor(defaultUsers[index])
                .withDate(new Date(plan.date))
                .build()
        }  ) 


export class ContractConfiguration{
    public planRepository : PlansRepository
    public planValidator : PlanValidator

    constructor(){
        this.planRepository  = new InMemoryPlansRepository()
        this.planValidator = new JoiPlanValidator()

        this.planRepository.populate(defaultPlans)
    }
}

