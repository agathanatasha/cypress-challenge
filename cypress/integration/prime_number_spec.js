// TODO: add data-cy in src
describe('Test Prime Number Median', function () {
    beforeEach(() => {
        cy.visit('/')
    })

    const data = [['18', '7'], ['10', '3,5'], ['3', '2'], ['3.1', '2,3'], ['0', ','], ['-1', ','], ['10000000', '4751053']]
    data.forEach(dataset => {
        it(`median for prime numbers less than ${dataset[0]}`, () => {
            cy.submit_value(dataset[0])

            cy.get('h2').should('contain', dataset[1])
        })
    })

    it('input greater than 10000000', () => {
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.submit_value('10000001')
          .wait(500)
          .then(() => {expect(stub.getCall(0)).to.be.calledWith('Number exceeds limit')})       
    })
})