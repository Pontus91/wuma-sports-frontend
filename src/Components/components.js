import React from 'react';
import StartPage from '../vy/StartPage/StartPage';
import MainPage from '../vy/MainPage/MainPage';
import LoginPage from '../vy/LoginPage/LoginPage';
 
const Home = () => <StartPage />
const Main = () => <MainPage />
const Login = () => <LoginPage />
 
const NotFound = () => <h3>This is not a valid path you potato!!</h3> 
export { Home, NotFound, Main, Login }