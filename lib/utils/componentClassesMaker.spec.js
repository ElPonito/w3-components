import { createComponentClasses } from './componentClassesMaker'

describe('utils', () => {
    describe('createComponentClasses', () => {
        it('Create Simple class from options', () => {
            const options = {
                color: 'pink'
            }
            const result = createComponentClasses(options)

            expect(result).to.be.equal('w3-pink')
        })

        it('Create multi classes from options', () => {
            const options = {
                color: 'blueGray',
                fontSize: 'xxxLarge'
            }
            const result = createComponentClasses(options)

            expect(result).to.be.equal('w3-blue-gray w3-xxxlarge')
        })
    })
    describe('createComponentClassesFromArray', () => {
        it('Create simple class from string', () => {
            const borderOption = { border: 'topBar' }

            const result = createComponentClasses(borderOption)

            expect(result).to.equal('w3-topbar')
        })

        it('Create simple class from array', () => {
            const borderOption = { border: ['borderLeft'] }

            const result = createComponentClasses(borderOption)

            expect(result).to.equal('w3-border-left')
        })

        it('Create multi classes from array of strings', () => {
            const borderOptions = { border: ['borderRight', 'bottomBar'] }

            const result = createComponentClasses(borderOptions)

            expect(result).to.equal('w3-border-right w3-bottombar')
        })

        it('Create multi classe from of objects and strings', () => {
            const borderOptions = { border: ['border0', { hoverBorderColor: 'green' }] }

            const result = createComponentClasses(borderOptions)

            expect(result).to.equal('w3-border-0 w3-hover-border-green')
        })
    })
})
