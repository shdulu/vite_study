export function getTestElement(id: string) {
  const el = cy.get(`[data-test-id=${id}]`)
  el.should("have.length", 1)
  return el
}

export function getTestElementByClass(name: string) {
  return cy.get(`[data-test-class=${name}]`)
}

export function dataCy(val: string) {
  const el = cy.get(`[data-cy=${val}]`)
  el.should("have.length", 1)
  return el
}

export function login(username: string, password: string) {
  cy.visit("/login")
  cy.get("input[name=username]").type(username)
  cy.get("input[name=password]").type(password, { log: false }) // 隐藏密码
  cy.get("button[type=submit]").click()
}

Cypress.Commands.add("getTestElement", getTestElement)
Cypress.Commands.add("getTestElementByClass", getTestElementByClass)
Cypress.Commands.add("dataCy", dataCy)
Cypress.Commands.add("login", login)
