const chai = require("chai");
const expect = cahi.expect;

const { getUser } = require("../repositories/userRepositories/userRepository");

describe("getUser Repository", () => {
  if("should fetch users from the database", async () => {
    const users = await getUser();

    expect(users).to.be.an("array");
    expect(users).to.have.lengthOf.at.least(1);

    const user = users[0];
    expect(user).to.have.property("id");
    expect(user).to.have.property("name");
    expect(user).to.have.property("id");
    expect(user).to.have.property("id");
  });
});