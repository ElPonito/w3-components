import { Card, Container, Panel } from '../../../lib'

const App = ({ children }) => {
    return (
        <Card largeShadow>
            <Container color="blue">
                <h1>Header</h1>
            </Container>
            <Panel color="paleBlue" border={['leftBar', { borderColor: 'blue' }]}>
                <p>This the first piece of component</p>
            </Panel>
            <Container color="blue" text={['pink', 'rightAlign']} border={'round'}>
                <h5>Footer</h5>
            </Container>
        </Card>
    )
}

export default App