import React from 'react'
import StartPage from '../vy/StartPage/StartPage';
import MainPage from '../vy/MainPage/MainPage';
 
const Home = () => <StartPage />
const Main = () => <MainPage />
 
const NotFound = () => <h3>This is not a valid path you potato!!</h3> 
export { Home, NotFound, Main }