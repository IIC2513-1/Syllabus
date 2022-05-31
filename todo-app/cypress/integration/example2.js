describe("My First Test", () => {
  it("Create Todo", () => {
    cy.visit("localhost:3000");
    cy.get("input").type("Hello, World");
    cy.contains("Agregar").click();
    cy.contains("h1", "Hello, World!!!!!!!!");
  });
});
