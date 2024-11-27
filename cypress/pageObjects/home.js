class Home {
    
    flujoSimpleDomicilioCibersource() {
        cy.get('#autocomplete-0-input').should('be.visible').click().type('baya{enter}')
        cy.wait(8000)
        cy.get('#product_addtocart_form > div.product-options-bottom').should('be.visible').click()
        cy.wait(4000)
        cy.get('#decrease-qty').should('be.visible')
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a').should('be.visible').click()
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > div').should('be.visible')
        cy.get('#top-cart-btn-checkout').should('be.visible').click().wait(8000)

        cy.get('#maincontent > div.columns > div > div.title-action-checkout > div').contains('Finalizar la compra')
        cy.get('#customer-email-fieldset > div > div').should('be.visible').type('jorge.rodriguez.g.ap+SimpleDomicilioCibersource@gmail.com')
        cy.get('#customer-email-fieldset > fieldset.customer-fullname.fieldset.hidden-fields > div:nth-child(1) > div').should('be.visible').type('Producto Simple')
        cy.get('#customer-email-fieldset > fieldset.customer-fullname.fieldset.hidden-fields > div:nth-child(2) > div').should('be.visible').type('Domicilio Cibersource')
        cy.get('#customer-email-fieldset > fieldset.customer-fullname.fieldset.hidden-fields > div.actions-toolbar > div > button').should('be.visible').click()        
        
        cy.get('#checkout-shipping-method-load > table > tbody > tr.row.selected > td:nth-child(1) > input').should('be.visible').check()
        cy.get('#label_method_freeshipping_freeshipping').should('be.visible').contains('domicilio')
        cy.get('#checkout-shipping-method-load > table > tbody > tr.content > td > div.new-address-popup > button > span').should('be.visible').click()
        cy.wait(3000)
        cy.get('#tab-new-address > h2').contains('obligatorios')       
        cy.get('input[placeholder="Ingresa tu dirección"]')
            .type('Av México 28, Panamá, Provincia de Panamá, Panama')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}');
        cy.get('#shipping-new-address-form > fieldset > div > div.field.additional').should('be.visible').type('4')
        
        cy.get('select[name="custom_attributes[district_id]"]')
            .select('Balboa');
        cy.get('select[name="custom_attributes[corregimiento_id]"]')
           .select('Saboga');
        cy.get('#shipping-new-address-form > div:nth-child(10)').type('3009200')
        cy.get('#shipping-new-address-form > div:nth-child(13)').type('casa')
        cy.get('#shipping-new-address-form > div.toolbar-actions > button').should('be.visible').click()
        cy.get('#opc-order_allocator > div.estimated-delivery-date > p > span:nth-child(1)').should('be.visible').contains('Fecha estimada de entrega')
        cy.get('#shipping-method-buttons-container > div > button').should('be.visible').click().wait(2000)

        cy.get('#checkout-payment-method-load > div > div > div > div:nth-child(2) > div > div.payment-method.method-cybersource > div.payment-method-title.field.choice').should('be.visible')
        cy.get('#chcybersource').check()
        cy.get('#payment_form_chcybersource > div.field.number.required > div').should('be.visible').type('4111111111111111')
        cy.get('select[name="payment[cc_exp_month]"]')
            .should('be.visible')       
            .select('01 - enero')
        cy.get('select[name="payment[cc_exp_year]"]')
            .should('be.visible')       
            .select('2027')
        cy.get('#chcybersource_cc_cid')
            .should('be.visible')
            .type('111')
        cy.get('#chcybersource_cc_owner')
            .should('be.visible')
            .type('Jorge Rodriguez') 
            
        cy.get('#billing-address-same-as-shipping-chcybersource').should('be.visible').check()
        cy.get('#agreement_chcybersource_2').should('be.visible').check()
        
        cy.get('#place-order-trigger-wrapper').should('be.visible').click().wait(5000);
    }

    flujoConfigurableDomicilioCibersource() {
        cy.get('#autocomplete-0-input').should('be.visible').click().type('Matebook X Pro 11th{enter}')
        cy.wait(8000)

        cy.get('#instant-search-results-container > div > ol > li > div > div > div.result-content > div > div.result-actions > div.actions-primary').should('be.visible').click()
        cy.wait(2000)

        cy.get('#product_addtocart_form > div.product-options-bottom').should('be.visible').click()
        cy.wait(4000)
        cy.get('#decrease-qty').should('be.visible')
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a').should('be.visible').click()
        cy.get('#html-body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > div').should('be.visible')
        cy.get('#top-cart-btn-checkout').should('be.visible').click().wait(8000)

        cy.get('#maincontent > div.columns > div > div.title-action-checkout > div').contains('Finalizar la compra')
        cy.get('#customer-email-fieldset > div > div').should('be.visible').type('jorge.rodriguez.g.ap+SimpleDomicilioCibersource@gmail.com')
        cy.get('#customer-email-fieldset > fieldset.customer-fullname.fieldset.hidden-fields > div:nth-child(1) > div').should('be.visible').type('Producto Configurable')
        cy.get('#customer-email-fieldset > fieldset.customer-fullname.fieldset.hidden-fields > div:nth-child(2) > div').should('be.visible').type('Domicilio Cibersource')
        cy.get('#customer-email-fieldset > fieldset.customer-fullname.fieldset.hidden-fields > div.actions-toolbar > div > button').should('be.visible').click()        
        
        cy.get('#checkout-shipping-method-load > table > tbody > tr.row.selected > td:nth-child(1) > input').should('be.visible').check()
        cy.get('#label_method_freeshipping_freeshipping').should('be.visible').contains('domicilio')
        cy.get('#checkout-shipping-method-load > table > tbody > tr.content > td > div.new-address-popup > button > span').should('be.visible').click()
        cy.wait(3000)
        cy.get('#tab-new-address > h2').contains('obligatorios')       
        cy.get('input[placeholder="Ingresa tu dirección"]')
            .type('Av México 28, Panamá, Provincia de Panamá, Panama')
            .wait(2000)
            .type('{downarrow}')
            .type('{enter}');
        cy.get('#shipping-new-address-form > fieldset > div > div.field.additional').should('be.visible').type('4')
        
        cy.get('select[name="custom_attributes[district_id]"]')
            .select('Balboa');
        cy.get('select[name="custom_attributes[corregimiento_id]"]')
           .select('Saboga');
        cy.get('#shipping-new-address-form > div:nth-child(10)').type('3009200')
        cy.get('#shipping-new-address-form > div:nth-child(13)').type('casa')
        cy.get('#shipping-new-address-form > div.toolbar-actions > button').should('be.visible').click()
        cy.get('#opc-order_allocator > div.estimated-delivery-date > p > span:nth-child(1)').should('be.visible').contains('Fecha estimada de entrega')
        cy.get('#shipping-method-buttons-container > div > button').should('be.visible').click().wait(2000)

        cy.get('#checkout-payment-method-load > div > div > div > div:nth-child(2) > div > div.payment-method.method-cybersource > div.payment-method-title.field.choice').should('be.visible')
        cy.get('#chcybersource').check()
        cy.get('#payment_form_chcybersource > div.field.number.required > div').should('be.visible').type('4111111111111111')
        cy.get('select[name="payment[cc_exp_month]"]')
            .should('be.visible')       
            .select('01 - enero')
        cy.get('select[name="payment[cc_exp_year]"]')
            .should('be.visible')       
            .select('2027')
        cy.get('#chcybersource_cc_cid')
            .should('be.visible')
            .type('111')
        cy.get('#chcybersource_cc_owner')
            .should('be.visible')
            .type('Jorge Rodriguez') 
            
        cy.get('#billing-address-same-as-shipping-chcybersource').should('be.visible').check()
        cy.get('#agreement_chcybersource_2').should('be.visible').check()
        
        cy.get('#place-order-trigger-wrapper').should('be.visible').click().wait(5000);
    }


    
    



    



  }
  
  export default Home;