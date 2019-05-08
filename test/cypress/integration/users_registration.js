describe('Users', function() {
    before(function() {
        cy.app('clean')
        cy.app('seed')
    });

    it('Show Sign in Page', function() {
        cy.visit('/users/sign_up') 

    });

    it('New user Sign Up', function() {
        cy.visit('/users/sign_up')
        cy.get('form').children()
        cy.get("[data-cy='fullname']").type("automated name test")
        cy.get("[data-cy='phonenumber']").type("4444666666")
        cy.get("[data-cy='username']").type("Cypress Username")
        cy.get("[data-cy='city']").type("City")
        cy.get("[data-cy='state']").type("State")
        cy.get("[data-cy='country']").type("Country")
        cy.get("[data-cy='email']").type("cypress@test.com")
        cy.get("[data-cy='password']").type("password")
        cy.get("[data-cy='cpassword']").type("password")
        cy.get("input[type='submit']").click()


    });

    it('Ensure unique email address', function() {
        cy.visit('/users/sign_up')
        cy.get('form').children()
        cy.get("[data-cy='fullname']").type("automated name test")
        cy.get("[data-cy='phonenumber']").type("4444666666")
        cy.get("[data-cy='username']").type("Cypress Username")
        cy.get("[data-cy='city']").type("City")
        cy.get("[data-cy='state']").type("State")
        cy.get("[data-cy='country']").type("Country")
        cy.get("[data-cy='email']").type("cypress@test.com")
        cy.get("[data-cy='password']").type("password")
        cy.get("[data-cy='cpassword']").type("password")
        cy.get("input[type='submit']").click()
        cy.contains("Email has already been taken")

    });

    it("Passwords don\'t match", function() {
        cy.visit('/users/sign_up')
        cy.get('form').children()
        cy.get("[data-cy='fullname']").type("automated name test")
        cy.get("[data-cy='phonenumber']").type("4444666666")
        cy.get("[data-cy='username']").type("Cypress Username")
        cy.get("[data-cy='city']").type("City")
        cy.get("[data-cy='state']").type("State")
        cy.get("[data-cy='country']").type("Country")
        cy.get("[data-cy='email']").type("cypress2@test.com")
        cy.get("[data-cy='password']").type("password")
        cy.get("[data-cy='cpassword']").type("wrong password")
        cy.get("input[type='submit']").click()
        cy.contains("Password confirmation doesn't match Password")
    });

});