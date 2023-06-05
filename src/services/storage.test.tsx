import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false,
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');

    
    it('must return an localStorage object with "diobank" key', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    })
    it('must create an object in localStorage', () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
    it('must change the object value in localStorage', () => {
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})