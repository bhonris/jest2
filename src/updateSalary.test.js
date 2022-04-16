import { updateSalary } from "./updateSalary"
import * as alert from "./alertSecurity"
describe("Tests for update salary", ()=> {
    let data;

    beforeEach(() => {
        data = [
            {name: "yosuke", wage:24},
            {name: "ben", wage:13},
            {name: "himiko", wage:38},
            {name: "touko", wage:16},
         ]
    })
    // it("test increase for ben", ()=> {
    //     updateSalary(data, "ben", 5)
    //      expect(data[1].wage).toEqual(18)
    //  })

    // it("test increase for ben 2", ()=> {
    //     updateSalary(data, "ben", -2)
    //     expect(data[1].wage).toEqual(13)
    // })

    it("test increase for non existent user", ()=> {
        const spyFunction = jest.spyOn(alert, 'alertSecurity')
        updateSalary(data, "bena", 2)
        expect(spyFunction).toHaveBeenCalled()
    })
})