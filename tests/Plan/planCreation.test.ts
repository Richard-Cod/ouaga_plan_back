import { Plan } from './../../clean/core/entities/Plan';
import { InMemoryPlansRepository } from './../../clean/core/database/InMemoryPlansRepository';
import { User } from '../../clean/core/entities/User';
import { PlanBuilder } from '../../clean/core/entities/PlanBuilder';
import { CreatePlan } from '../../clean/core/useCases/CreatePlan';


describe("Test User plan creation", () => {
  let repo : InMemoryPlansRepository;
  let richard : User;
  let richardPlan : Plan;
  let defaultExpectedPlanInDB : Plan;

  beforeEach(async () => {
    repo = new InMemoryPlansRepository()
    richard = new User("Richard")
    richardPlan =  new PlanBuilder()
                          .withAuthor(richard)
                          .withTitle("title")
                          .build()
    defaultExpectedPlanInDB = await new CreatePlan(richard , richardPlan).execute(repo)
  })

    it("should create a Plan", async () => {
      expect(richardPlan.title).toBe(defaultExpectedPlanInDB.title);
    });

    it("should get a Plan", async () => {
      const expectedPlan = await repo.getPlan(1)
      expect(richardPlan.title).toBe(expectedPlan?.title);
    });

    it("should not find a Plan", async () => {
      expect(() => repo.getPlan(2)).toThrow(new Error("Plan does not exist"));
    });

    it("should update  a Plan", async () => {
      await repo.update(1 , {
        title : "newTitle"
      })
      const expectedPlan = repo.getPlan(1)
      expect("newTitle").toEqual(expectedPlan?.title);
      expect("newTitle").toEqual(expectedPlan?.title);
    });

    it("should not update a Plan", async () => {
      const updatePlan = () =>  repo.update(3 , {
        title : "newTitle"
      })
      expect(updatePlan).toThrow(new Error("Plan does not exist"));
    });


    it("should delete a Plan", async () => {
      await repo.delete(1)
      expect(() => repo.getPlan(1) ).toThrow(new Error("Plan does not exist"));
    });


    it("should not delete a Plan", async () => {
      const deletePlan = () =>  repo.delete(2)
      expect(deletePlan).toThrow(new Error("Plan does not exist"));
    });

    it("should add invited to a Plan", async () => {
      const a = new User('a')  , b = new User('b') , c = new User('c')
      const invited = [a , b , c]
      const plan =  {...richardPlan , invited : [a , b]}
      plan.invited?.push(c)
      await new CreatePlan(richard , plan).execute(repo)
      const expectedPlan = repo.getPlan(2)
      expect(expectedPlan?.invited).toEqual(invited);
    });
    
  });