// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

import {
  dataCy,
  getTestElement,
  getTestElementByClass,
  login
} from "./support/commands"

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy: typeof dataCy
      /**
       * Custom Command - getTestElement
       * Gets elements via the data-test-id-attribute
       * fails if more than one of the same attribute name found
       */
      getTestElement: typeof getTestElement
      getTestElementByClass: typeof getTestElementByClass
    }
  }
}

export {}
