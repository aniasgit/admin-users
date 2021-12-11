describe('Users Table Tests', () => {
    it('Delete one user: Cabrera Stokes', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Cabrera Stokes').parent('tr').contains('Delete').click(); //clicking Cabrera Stokes Delete button
        cy.get('.ant-modal-root').get('.ant-modal-confirm-title').contains('Are you sure you want to delete Cabrera Stokes'); //checking confirmation text
        cy.get('.ant-modal-root').contains('OK').click(); //clicking confirmation button
        cy.contains('Cabrera Stokes').should('not.exist'); //checking if Cabrera Sokes still exist
    })

    it('Cancel deleting one user: Cabrera Stokes', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Cabrera Stokes').parent('tr').contains('Delete').click(); //clicking Cabrera Stokes Delete button
        cy.get('.ant-modal-root').get('.ant-modal-confirm-title').contains('Are you sure you want to delete Cabrera Stokes'); //checking confirmation text
        cy.get('.ant-modal-root').contains('Cancel').click(); //clicking Modal cancel button
        cy.contains('Cabrera Stokes').should('exist'); //checking if Cabrera Sokes still exist
    })

    it('Checking if "Delete selected" button is going disabled and enabled right way', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Delete selected').should('be.disabled'); //checking if delete selected is disable
        cy.contains('Adkins Moody').parent('tr').find('[type="checkbox"]').check();//selecting Adkins Moody checkbox
        cy.contains('Delete selected').should('be.enabled'); //checking if delete selected is enabled
        cy.contains('Adkins Moody').parent('tr').find('[type="checkbox"]').uncheck(); //unselecting Adkins Moody checkbox
        cy.contains('Delete selected').should('be.disabled'); //checking if delete selected is disable
    })

    it('Delete multiple users', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Adkins Moody').parent('tr').find('[type="checkbox"]').check();//selecting Adkins Moody checkbox
        cy.contains('Barbara Talley').parent('tr').find('[type="checkbox"]').check();//selecting Barbara Talley checkbox
        cy.contains('Frieda Morris').parent('tr').find('[type="checkbox"]').check();//selecting Frieda Morris checkbox
        cy.contains('Delete selected').should('be.enabled').click(); //checking if delete selected is disable and clicking it 
        cy.get('.ant-modal-root').get('.ant-modal-confirm-title').contains('Are you sure you want to delete: Adkins Moody, Barbara Talley, Frieda Morris?'); //checking confirmation text
        cy.get('.ant-modal-root').contains('OK').click();//clicking confirmation button
        cy.contains('Adkins Moody').should('not.exist');//checking if Adkins Moody still exist
        cy.contains('Frieda Morris').should('not.exist');//checking if Fieda Morris still exist
        cy.contains('Barbara Talley').should('not.exist');//checking if Barbara Talley still exist
    })

    it('Cancel delete multiple users', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Adkins Moody').parent('tr').find('[type="checkbox"]').check();//selecting Adkins Moody checkbox
        cy.contains('Barbara Talley').parent('tr').find('[type="checkbox"]').check();//selecting Barbara Talley checkbox
        cy.contains('Frieda Morris').parent('tr').find('[type="checkbox"]').check();//selecting Frieda Morris checkbox
        cy.contains('Delete selected').should('be.enabled').click(); //checking if delete selected is disable and clicking it 
        cy.get('.ant-modal-root').get('.ant-modal-confirm-title').contains('Are you sure you want to delete: Adkins Moody, Barbara Talley, Frieda Morris?'); //checking confirmation text
        cy.get('.ant-modal-root').contains('Cancel').click();//clicking Cancel button
        cy.contains('Adkins Moody').should('exist');//checking if Adkins Moody still exist
        cy.contains('Frieda Morris').should('exist');//checking if Fieda Morris still exist
        cy.contains('Barbara Talley').should('exist');//checking if Barbara Talley still exist
    })

    it('Go to user details form', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Cecelia Ortega').parent('tr').contains('Details').click(); //clicking Cecelia Ortega Details button
        cy.url().should('include', '/user/6193ce074efc3e500843eb80'); //checking if new url includes Cecelia Ortega id
    })

    it('Filter name', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.ant-table-filter-column')
            .contains('Name')
            .parents('.ant-table-filter-column')
            .find('.ant-table-filter-trigger')
            .click();
        cy.get('.ant-table-filter-dropdown').contains('Chen Holmes').click();
        cy.get('.ant-table-filter-dropdown').contains('OK').click();
        cy.contains('Chen Holmes').should('exist');
        cy.get('.ant-table-row').should('have.length', 1);
    })
})

