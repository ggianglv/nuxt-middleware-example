import { getUser } from "../user";


describe("Test API", () => {
  beforeEach(() => {
    jest.mock("../__mock__/user")
  })

  it("works with promises", () => {
    return getUser().then(data => expect(data.name).toEqual('Giang'))
  });
})

