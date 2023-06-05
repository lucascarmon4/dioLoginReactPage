const conta = {
    email: 'lucas@gmail.com',
    password: 'pass123',
    name: 'Lucas Carmona',
    balance: 2500.00,
    id: '1',
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
})