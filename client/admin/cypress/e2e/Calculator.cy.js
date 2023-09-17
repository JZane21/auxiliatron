describe('Calculator actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it("should write a decimal number", () => {
    const BUTTONS = ["C", "1", "2", "3", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "123");
    cy.get("p[id='resultToShow']").should("have.text", "123");
  });

  it("should write a float number", () => {
    const BUTTONS = ["C", "1", "1", "1", ".", "0", "1", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "111.01");
    cy.get("p[id='resultToShow']").should("have.text", "111.01");
  });

  it("should write a negative decimal number", () => {
    const BUTTONS = ["C", "1", "1", "1", "(+/-)", "1", "3", "4"];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "-111134");
  });

  it("should write a negative float number", () => {
    const BUTTONS = ["C", "1", "1", "1", "(+/-)", "1", ".", "4", "(+/-)", "4", "(+/-)", "7",];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "-1111.447");
  });

  it("should write a negative decimal number", () => {
    const BUTTONS = ["C", "1", "1", "1", "(+/-)", "1", "3", "4"];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "-111134");
  });

  it("should delete a number", () => {
    const BUTTONS = ["1", "6", "7", "5", "(+/-)", "0", "9", ".", "3", "5", "<-",
      "<-", "0", "<-", "<-"];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "-167509");
  });

  it("should write a decimal number", () => {
    const BUTTONS = ["C", "1", "2", "3", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "123");
    cy.get("p[id='resultToShow']").should("have.text", "123");
  });

  it("should clear the input", () => {
    const BUTTONS = ["C", "1", "2", "3", "=", "C"];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "");
    cy.get("p[id='resultToShow']").should("have.text", "");
  });

  it("should perform addition", () => {
    const BUTTONS = ["1", "+", "2", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='resultToShow']").should("have.text", "3");
  });

  it("should perform subtraction", () => {
    const BUTTONS = ["5", "-", "2", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='resultToShow']").should("have.text", "3");
  });

  it("should perform multiplication", () => {
    const BUTTONS = ["3", "*", "4", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='resultToShow']").should("have.text", "12");
  });

  it("should perform division", () => {
    const BUTTONS = ["6", "/", "2", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='resultToShow']").should("have.text", "3");
  });

  it("should toggle positive/negative sign", () => {
    const BUTTONS = ["1", "2", "3", "(+/-)"];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "-123");
  });

  it("should handle decimal point", () => {
    const BUTTONS = ["1", ".", "2", "3", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='resultToShow']").should("have.text", "1.23");
  });

  it("should show me an error message", () => {
    const BUTTONS = ["1", ".", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("div[id='ModalMessage']").should("exist");
  });

  it("should show me an error message", () => {
    const BUTTONS = ["1", ".", "="];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("div[id='ModalMessage']").should("exist");
  });

  it("should erase point", () => {
    const BUTTONS = ["1", ".", "."];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("p[id='result']").should("have.text", "1");
  });

  it("should show me an error message", () => {
    const BUTTONS = ["."];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("div[id='ModalMessage']").should("exist");
  });

  it("should show me an error message", () => {
    const BUTTONS = ["+"];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("div[id='ModalMessage']").should("exist");
  });

  it("should show me an error message", () => {
    const BUTTONS = ["."];
    BUTTONS.map(item => cy.get(`button[id='${item}']`).click());
    cy.get("div[id='ModalMessage']").should("exist");
  });

})