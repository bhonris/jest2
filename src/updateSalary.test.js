import { updateSalary } from "./updateSalary"

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
    it("test increase for ben", ()=> {
         updateSalary(data, "ben", 5)
         expect(data[1].wage).toEqual(18)
     })

     it("test increase for touko", ()=> {
        updateSalary(data, "ben", -2)
        expect(data[1].wage).toEqual(13)
    })
})