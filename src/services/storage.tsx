
interface IDioBank {
    login: boolean;
}

const dioBank = {
    login: false,
} 

export const getAllLocalStorage = (): string | null => {   
    return localStorage.getItem('diobank');
} 

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
}
export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank));
}

export const createDarkModeLocalStorage = () => {
    localStorage.setItem('darkMode', JSON.stringify(false));
}
export const changeDarkModeLocalStorage = (value: boolean) => {
    localStorage.setItem('darkMode', JSON.stringify(value));
}
export const getDarkModeOnLocalStorage = ():string | null => {
    return localStorage.getItem('darkMode');
}