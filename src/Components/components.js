import React from 'react';
import StartPage from '../views/StartPage/StartPage';
import MainPage from '../views/MainPage/MainPage';
import LoginPage from '../views/LoginPage/LoginPage';
 
const HOME = () => <StartPage />
const MAIN = () => <MainPage />
const LOGIN = () => <LoginPage />
 
const NotFound = () => <h3>This is not a valid path you potato!!</h3> 
export { HOME, NotFound, MAIN, LOGIN }