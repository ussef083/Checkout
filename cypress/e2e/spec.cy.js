Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Ensure that all shipping address fields are completed by the user', () => {
  it('Ensure that all shipping address fields are completed by the user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="paymentBtn"]').click()
    cy.get('[data-cy="postal-code-error"]').should('exist')
    cy.get('[data-cy="city-error"]').should('exist')
    cy.get('[data-cy="country-error"]').should('exist')
    cy.get('[data-cy="address-error"]').should('exist')
    cy.get('[data-cy="paymentContainer"]').should('not.exist')
  })
})

describe('Ensure that address and country field is a plain text not html/js code and postal code contains only numeric digit', () => {
  it('Ensure that address and country field is a plain text not html/js code and postal code contains only numeric digit', () => {
    
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="address-input"]').type('<div>malware</div>')
    cy.get('[data-cy="country-input"]').type('maroc')
    cy.get('[data-cy="postal-code-input"]').type('12h45')
    // cy.get('[data-cy="city-input"]').type('')

    

    cy.get('[data-cy="paymentBtn"]').click()
    cy.get('[data-cy="postal-code-error"]').should('not.exist')
    cy.get('[data-cy="city-error"]').should('exist')
    cy.get('[data-cy="country-error"]').should('not.exist')
    cy.get('[data-cy="address-error"]').should('exist')

    cy.get('[data-cy="paymentContainer"]').should('not.exist')
  })
})

describe('The address inputs are filled correctly', () => {
  it('The address inputs are filled correctly', () => {
    
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="address-input"]').type('nakhil 1')
    cy.get('[data-cy="country-input"]').type('maroc')
    cy.get('[data-cy="postal-code-input"]').type('1245')
    cy.get('[data-cy="city-input"]').type('fes')

    

    cy.get('[data-cy="paymentBtn"]').click()
    cy.get('[data-cy="postal-code-error"]').should('not.exist')
    cy.get('[data-cy="city-error"]').should('not.exist')
    cy.get('[data-cy="country-error"]').should('not.exist')
    cy.get('[data-cy="address-error"]').should('not.exist')

    cy.get('[data-cy="paymentContainer"]').should('exist')
  })
})

describe('Paiment fields are not filled correctly', () => {
  it('Paiment fields are not filled correctly', () => {
    
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="address-input"]').type('nakhil 1')
    cy.get('[data-cy="country-input"]').type('maroc')
    cy.get('[data-cy="postal-code-input"]').type('1245')
    cy.get('[data-cy="city-input"]').type('fes')

    

    cy.get('[data-cy="paymentBtn"]').click()
    cy.get('[data-cy="postal-code-error"]').should('not.exist')
    cy.get('[data-cy="city-error"]').should('not.exist')
    cy.get('[data-cy="country-error"]').should('not.exist')
    cy.get('[data-cy="address-error"]').should('not.exist')

    cy.get('[data-cy="paymentContainer"]').should('exist')

    cy.get('[data-cy="card-number-input"]').type('123456789')
    cy.get('[data-cy="email-input"]').type('xxxxxxxxx')
    cy.get('[data-cy="card-name-input"]').type('youssef')
    cy.get('[data-cy="exp-input"]').type('12/21')
    cy.get('[data-cy="cvc-input"]').type('123')

    cy.get('[data-cy="payBtn"]').click()

    cy.get('[data-cy="card-number-error"]').should('exist')
    cy.get('[data-cy="email-error"]').should('exist')
    cy.get('[data-cy="card-name-error"]').should('not.exist')
    cy.get('[data-cy="exp-error"]').should('not.exist')
    cy.get('[data-cy="cvc-error"]').should('not.exist')



  })
})

describe('Paiment fields are filled correctly but card number is declined, not accepted by paiment processor', () => {
  it('Paiment fields are filled correctly but card number is declined, not accepted by paiment processor', () => {
    
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="address-input"]').type('nakhil 1')
    cy.get('[data-cy="country-input"]').type('maroc')
    cy.get('[data-cy="postal-code-input"]').type('1245')
    cy.get('[data-cy="city-input"]').type('fes')

    

    cy.get('[data-cy="paymentBtn"]').click()
    cy.get('[data-cy="postal-code-error"]').should('not.exist')
    cy.get('[data-cy="city-error"]').should('not.exist')
    cy.get('[data-cy="country-error"]').should('not.exist')
    cy.get('[data-cy="address-error"]').should('not.exist')

    cy.get('[data-cy="paymentContainer"]').should('exist')

    cy.get('[data-cy="card-number-input"]').type('4242 4242 4242 4000')
    cy.get('[data-cy="email-input"]').type('youssef@wardi.com')
    cy.get('[data-cy="card-name-input"]').type('youssef')
    cy.get('[data-cy="exp-input"]').type('12/31')
    cy.get('[data-cy="cvc-input"]').type('123')


    cy.get('[data-cy="payBtn"]').click()


    cy.get('[data-cy="card-number-error"]').should('not.exist')
    cy.get('[data-cy="email-error"]').should('not.exist')
    cy.get('[data-cy="card-name-error"]').should('not.exist')
    cy.get('[data-cy="exp-error"]').should('not.exist')
    cy.get('[data-cy="cvc-error"]').should('not.exist')


    cy.get('[data-cy="error-container"]').should('contain', 'Invalid card, please update your card');

  })
})


describe('Paiment fields are filled correctly', () => {
  it('Paiment fields are filled correctly', () => {
    
    cy.visit('http://localhost:3000/')

    
    cy.get('[data-cy="address-input"]').type('nakhil 1')
    cy.get('[data-cy="country-input"]').type('maroc')
    cy.get('[data-cy="postal-code-input"]').type('1245')
    cy.get('[data-cy="city-input"]').type('fes')

    

    cy.get('[data-cy="paymentBtn"]').click()
    cy.get('[data-cy="postal-code-error"]').should('not.exist')
    cy.get('[data-cy="city-error"]').should('not.exist')
    cy.get('[data-cy="country-error"]').should('not.exist')
    cy.get('[data-cy="address-error"]').should('not.exist')

    cy.get('[data-cy="paymentContainer"]').should('exist')

    cy.get('[data-cy="card-number-input"]').type('4242 4242 4242 4242')
    cy.get('[data-cy="email-input"]').type('youssef@wardi.com')
    cy.get('[data-cy="card-name-input"]').type('youssef')
    cy.get('[data-cy="exp-input"]').type('12/31')
    cy.get('[data-cy="cvc-input"]').type('123')


    cy.get('[data-cy="payBtn"]').click()


    cy.url().should('include', '/success');


    cy.get('[data-cy="card-number-error"]').should('not.exist')
    cy.get('[data-cy="email-error"]').should('not.exist')
    cy.get('[data-cy="card-name-error"]').should('not.exist')
    cy.get('[data-cy="exp-error"]').should('not.exist')
    cy.get('[data-cy="cvc-error"]').should('not.exist')


    cy.get('[data-cy="error-container"]').should('not.exist')



  })
})