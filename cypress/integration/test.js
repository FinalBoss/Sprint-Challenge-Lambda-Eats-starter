describe("Test form inputs", function ()  {

it("Visit localhost", function() {
    cy.visit("http://localhost:3000/pizza");
});

it("first test: Adds text to name input", function() {

    cy.get('[data-cy="name"]').type("Brian").should("have.value", "Brian");

});

it("second test: Chooses a pizza size", function() {

cy.get('[data-cy="psize"]').select("Medium").should("have.value", "Medium");

});

it("third test: Selects multiple choices", function() {

    cy.get('[data-cy="toppings"]').check().should("be.checked");

});

it("Submit button test", function() {

    cy.contains("Order Now").click();

})

});