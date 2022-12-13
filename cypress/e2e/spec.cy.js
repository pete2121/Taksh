import loginpage from "../pages/loginpage";
import "@cypress-audit/lighthouse/commands";


describe('My first test', () =>  {

  it('Finds the contect login', () =>  {
    const login = new loginpage();
    //cy.viewport('ipad-mini')
    cy.visit('https://www.saucedemo.com/')
    //cy.lighthouse()
    cy.contains('Accepted usernames are:')
    login.typeUserName('standard_user')



    cy.get('#login-button').invoke('val').as('tokeimeno')

    cy.get('@tokeimeno').then(keimeno=>{
      expect(keimeno).to.contains("Login")

    })
    
     
    login.typePassword('secret_sauce')
    cy.get('#login-button').as('autoeinailoginbutton')
    cy.get('@autoeinailoginbutton').click()
    cy.get('span.title').debug().contains('Products')
    cy.get('#inventory_container').should('be.visible')
    cy.get('.inventory_item').eq(2).contains('Sauce Labs Bolt T-Shirt')
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

    
 })

  it('add item to basket', function () {
    expect(this.tokeimeno).to.eq("Login")
    })

 

})