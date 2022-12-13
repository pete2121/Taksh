class loginpage {


elements = {

    usernamefield : () => cy.get('#user-name'),
    passwordfield : () => cy.get('#password'),
    loginbutton : () => cy.get('#login-button')

}


typeUserName(name) {
    cy.get('#user-name').type(name)
}


typePassword(password) {
    this.elements.passwordfield().type(password)
}

clickLoginButton() {
    this.elements.loginbutton().click()
}

getloginButtonText() {
    
    this.elements.loginbutton().invoke('attr','value').then(
     loginvalue =>  cy.log("EDWWWWW " + loginvalue) 


    )

}

}

export default loginpage