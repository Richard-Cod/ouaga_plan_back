import { JoiPlanValidator } from './../../clean/core/Validators/JoiPlanValidator';


describe('Sould implementes plan validator', () => {
    it("should return bad object", async () => {
        const validator = new JoiPlanValidator()
        const data = {
        }

        expect(validator.validateForCreation(data).state).toBe(false);
      });

      it("should return good object", async () => {
        const validator = new JoiPlanValidator()
        const data = {
          "author": "jkdekjde",
          "invited": [],
          "title": "title",
          "description": "description",
          "date": "2021-07-18"
      }

      console.log(validator.validateForCreation(data));
      

        expect(validator.validateForCreation(data).state).toBe(true);
      });

})
