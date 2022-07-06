describe('Meli search', () => {
  beforeEach(() => cy.visit('/'));

  it('Should search base on query and return max four items and see product detail', () => {
    cy.get('input').type('iphone')
    cy.get('button').click()
    cy.url().should('contain', '/items?search=iphone')
    cy.get('section').find('article').should('have.length', 4)
    cy.get('article').first().click()
    cy.url().should('contain', '/items/')
    cy.get('h1').should('exist')
    cy.get('h2').should('exist').and('contain.text', 'Descripción del producto')
    cy.get('p').should('exist')
  });

  it('Should search base on query when we passed query on url and return max four items and see product detail', () => {
    cy.visit('/items?search=android');
    cy.get('input').should('contain.value', 'android')
    cy.get('section').find('article').should('have.length', 4)
    cy.get('article').first().click()
    cy.url().should('contain', '/items/')
    cy.get('h1').should('exist')
    cy.get('h2').should('exist').and('contain.text', 'Descripción del producto')
    cy.get('p').should('exist')
  });

  it('Should product detail if we pass product id on url', () => {
    cy.visit('/items/MLA1141502144');
    cy.get('h1').should('exist')
    cy.get('h2').should('exist').and('contain.text', 'Descripción del producto')
    cy.get('p').should('exist')
  });



});
