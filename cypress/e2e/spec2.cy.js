
describe('My first test', () =>  {
    it('test the tab', function ()  {
     // cy.viewport('ipad-mini')
      cy.visit('https://motathens.gr/')
      cy.get('.main-menu>li').eq(7).click()
      cy.get('h2.title').should('have.text', 'Testing Job Board')
      cy.get('a.ticket-link').eq(0).invoke('removeAttr', 'target').click({ force: true })
      cy.get('h1.job-title').contains('Software QA Automation Engineer')

    })

})
