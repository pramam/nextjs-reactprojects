/// <reference types="cypress" />

describe("Testing BubbleWrap", ()=>{
    beforeEach(()=>{
        cy.visit('/bubblewrap')
    })

    it("check that there are 80 buttons", ()=>{

        cy.get("h3").should("be.visible").contains("Bubble Wrap")
        cy.get("h4").should("be.visible").contains("Click on a bubble to pop it. Click again to reset.")
        
        // Get 80 buttons of desired color
        cy.get("button.bg-blue-300").should("have.length",80)
    
    })

    it("click on a button should change color, click again should change color back", ()=>{
        cy.get("button.bg-blue-300").should("be.visible")

        // Get 80 buttons of desired color
        cy.get("button.bg-blue-300").should("have.length",80)
        
        // click on a dark button
        cy.get("#btn-id-1").should("have.class","bg-blue-300").click()
        
        // It should change to a lighter color
        cy.get("#btn-id-1").should("have.class","bg-blue-100")

        // Click on it again
        cy.get("#btn-id-1").should("be.visible").click()

        // It should change to a darker color
        cy.get("#btn-id-1").should("be.visible").should("have.class","bg-blue-300")        
    })

    it("click on 3 random buttons and make sure they pop", ()=>{
        cy.get("#btn-id-23").should("be.visible").should("have.class","bg-blue-300")
        cy.get("#btn-id-23").click()
        cy.get("#btn-id-23").should("be.visible").should("have.class","bg-blue-100")
        
        cy.get("#btn-id-40").should("be.visible").should("have.class","bg-blue-300")
        cy.get("#btn-id-40").click()
        cy.get("#btn-id-40").should("be.visible").should("have.class","bg-blue-100")

        cy.get("#btn-id-79").should("be.visible").should("have.class","bg-blue-300")
        cy.get("#btn-id-79").click()
        cy.get("#btn-id-79").should("be.visible").should("have.class","bg-blue-100")
        
    })
})