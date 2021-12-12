describe('User Form Tests', () => {
    it('"Back to main view" button test', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Back to main view').click(); //clicking Back to main view button
        cy.url().should('equal', 'http://localhost:3000/'); // going back to users table
    });

    it('Name validation', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Name').parents('.ant-row').find('.ant-input').clear();
        cy.contains('Name').parents('.ant-row').find('.ant-form-item-explain-error').contains('User name is required!').should('exist');
        cy.contains('Name').parents('.ant-row').find('.ant-input').type('Anna');
        cy.contains('Name').parents('.ant-row').find('.ant-form-item-explain-error').contains('User name is required!').should('not.exist');
    });

    it('Changing name', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Name').parents('.ant-row').find('.ant-input').should('have.value', 'Nadia');
        cy.contains('Name').parents('.ant-row').find('.ant-input').clear();
        cy.contains('Name').parents('.ant-row').find('.ant-input').type('Anna');
        cy.contains('Name').parents('.ant-row').find('.ant-input').should('have.value', 'Anna');
    });

    it('Last name validation', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').clear();
        cy.contains('Last Name').parents('.ant-row').find('.ant-form-item-explain-error').contains('User last name is required!').should('exist');
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').type('Johnson');
        cy.contains('Last Name').parents('.ant-row').find('.ant-form-item-explain-error').contains('User last name is required!').should('not.exist');
    });

    it('Changing last name', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').should('have.value', 'Sharp');
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').clear();
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').type('Johnson');
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').should('have.value', 'Johnson');
    });

    it('E-mail validation', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').clear();
        cy.contains('E-mail').parents('.ant-row').find('.ant-form-item-explain-error').contains('User e-mail is required!').should('exist');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').type('mama@');
        cy.contains('E-mail').parents('.ant-row').find('.ant-form-item-explain-error').contains('User e-mail is required!').should('exist');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').type('wp.pl');
        cy.contains('E-mail').parents('.ant-row').find('.ant-form-item-explain-error').contains('User e-mail is required!').should('not.exist');
    });

    it('Changing e-mail', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').should('have.value', 'vedward-aminey@zane.pro');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').clear();
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').type('anna.johnson@gmail.com');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').should('have.value', 'anna.johnson@gmail.com');
    });

    it('Changing gender', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Gender').parents('.ant-row').find('.ant-select-selection-item').invoke('text').should('eq', 'female');
        cy.contains('Gender').parents('.ant-row').find('.ant-select').click()
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(/^male$/).click();
        cy.contains('Gender').parents('.ant-row').find('.ant-select-selection-item').invoke('text').should('eq', 'male');
    });

    it('Reset button test', () => {
        cy.visit('http://localhost:3000/user/6193ce077292611e190f5b80');// going to Nadia Sharp details form
        cy.contains('Name').parents('.ant-row').find('.ant-input').clear();
        cy.contains('Name').parents('.ant-row').find('.ant-input').type('Anna');
        cy.contains('Name').parents('.ant-row').find('.ant-input').should('have.value', 'Anna');
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').clear();
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').type('Johnson');
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').should('have.value', 'Johnson');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').clear();
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').type('anna.johnson@gmail.com');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').should('have.value', 'anna.johnson@gmail.com');
        cy.contains('Gender').parents('.ant-row').find('.ant-select').click()
        cy.get('.ant-select-dropdown').find('.ant-select-item-option-content').contains(/^male$/).click();
        cy.contains('Gender').parents('.ant-row').find('.ant-select-selection-item').invoke('text').should('eq', 'male');
        cy.contains('Reset').click();
        cy.contains('Name').parents('.ant-row').find('.ant-input').should('have.value', 'Nadia'); 
        cy.contains('Last Name').parents('.ant-row').find('.ant-input').should('have.value', 'Sharp');
        cy.contains('E-mail').parents('.ant-row').find('.ant-input').should('have.value', 'vedward-aminey@zane.pro');
        cy.contains('Gender').parents('.ant-row').find('.ant-select-selection-item').invoke('text').should('eq', 'female');
    });
})