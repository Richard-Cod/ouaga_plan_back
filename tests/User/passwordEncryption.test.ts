import { BcryptCryptor } from '../../clean/core/contracts/BcrypCryptor';
import { ICryptor } from '../../clean/core/contracts/ICryptor';

const  cryptor : ICryptor = new BcryptCryptor();

describe("Test User plan creation", () => {
    const data = {
        username : "username",
        password : "password"
    }


    it("should test cryptor", async () => {
        const newPassword : string = await cryptor.encrypt(data.password);
        expect(data.password).not.toBe(newPassword);

        const test = await cryptor.compare(data.password , newPassword);
        const test2 = await cryptor.compare("data.password" , newPassword);

        expect(test).toBe(true);
        expect(test2).toBe(false);
      });

    //   bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // });
  

})