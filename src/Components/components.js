import React from 'react'
import StartPage from '../vy/StartPage/StartPage';
import MainPage from '../vy/MainPage/MainPage';
 
const Home = () => <StartPage />
const Main = () => <MainPage />
 
const NotFound = () => <h3>404</h3> 
export { Home, NotFound, Main }