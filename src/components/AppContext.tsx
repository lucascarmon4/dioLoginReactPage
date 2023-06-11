import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage, getDarkModeOnLocalStorage } from "../services/storage";


interface IAppContext {
    user: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    isDarkMode: boolean,
    setIsDarkMode: (isDarkMode: boolean) => void,
    transition: string
  }
  


  export const AppContext = createContext({} as IAppContext);
  


  export const AppContextProvider = ({ children }: any) => {

    const transition = '.5s'

    const [ isDarkMode, setIsDarkMode ] = useState<boolean>(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);

    const storage = getAllLocalStorage();
    const darkModeStorage = getDarkModeOnLocalStorage();
    useEffect(() => {
      if(storage) {
        const { login } = JSON.parse(storage);
        setIsLoggedIn(login);
      }
      if(darkModeStorage) {
        setIsDarkMode(JSON.parse(darkModeStorage));
      }
    }, []);


    const user = 'lucas'

    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, isDarkMode, setIsDarkMode, transition }}>
        { children }
      </AppContext.Provider>
    );
  } 
  