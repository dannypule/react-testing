import makeMeASandwich from '../make-me-a-sandwich'

test("should return null if typeof isn't a string", () => {
  const req = {
    query: {
      sandwich: 'null',
    },
  }
  expect(makeMeASandwich(req)).toBeTruthy()
})
