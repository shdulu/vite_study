describe("HomePage Test", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should display the home page title", () => {
    cy.get('[data-testid="home-ttile"]').should("have.text", "Home Page")
  })

  it("should display the HelloWorld component with correct message", () => {
    cy.get("h1").should("contain.text", "測試 message")
  })
})
