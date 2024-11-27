import WebPage from '../fixtures/WebPage';
import Home from '../pageObjects/home';

const openUrl = new WebPage();
const home = new Home();


beforeEach(() => {
    cy.viewport(1500, 900);
});

describe('COCHEZP20-1110 : Usuario Guest', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()  
  });  

  it('COCHEZP20-1110 : Usuario Guest | TC-001: Ingresar a la pagina web', () => {
    //cy.wait(1000)
    openUrl.openUrl();
    cy.wait(2000)
  });

  it('COCHEZP20-1110 : Usuario Guest | TC-002: Agregar Producto', () => {
    home.flujoSimpleDomicilioCibersource()

    


  });



});