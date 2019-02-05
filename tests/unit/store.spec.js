import store from "../store.js";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({ data: [{ name: "Sloppy" }, { name: "Floppy" }] })
  )
}));

describe("store", () => {
  it("uses Axios to get Pets", () => {
    const commit = jest.fn();
    const responseData = { 
      "_id" : ObjectId("5c2d198c2998c3c57b53b2c2"),
      "name" : "soppy",
      "img_url" : "https://www.thesprucepets.com/thmb/oMO-GH0xIJROTx1ben-c1ckM_3w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-meowing-on-wooden-floor-125026653-5aeb0df043a103003619c114.jpg",
      "age" : "2",
      "breed" : "short hair",
      "gender" : "female",
      "species" : "cat",
      "profile_url" : "https://www.strayrescue.org/"
    };

    await actions.getPets({commit});

    expect(url).toBe("http://localhost:3000/getPets");
    expect(commit).toHaveBeenCalledWith("setPetState", responseData)
  });
});