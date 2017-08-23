import { Card, Container } from '../../../lib'

const App = ({children}) => {
    return (
        <Card largeShadow>
            <Container color="w3-blue">
                <h1>Header</h1>
            </Container>
            <Container>
                <p>This the first piece of component</p>
            </Container>
            <Container color="w3-blue">
                <h5>Footer</h5>
            </Container>
        </Card>
    )
}

export default App