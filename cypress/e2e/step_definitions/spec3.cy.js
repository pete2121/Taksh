describe('My first test', () =>  {

    it('Tab test', () =>  {
      cy.visit('https://motathens.gr/')
      cy.get('.main-menu>li').eq(7).click()
      cy.get('a.ticket-link').eq(0).invoke('removeAttr','target').click({force:true})  
      cy.get('h1.job-title').contains('Software QA Automation Engineer ')  

      })

    })