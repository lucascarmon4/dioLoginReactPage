import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        isLoggedIn: true,
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {
    
    const mockEmail = 'lucas@gmail.com'
    const mockPassword = 'pass123'

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy()
    })

    it('Should show an error if email is invalid.', async () => {
        const response = await login('invalidmail@gmail.com', 'invalidpass');
        expect(response).toBeFalsy()    
    })
})