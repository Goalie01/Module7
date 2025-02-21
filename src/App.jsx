import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './compoents/Clock'
import ActivityFinder from './compoents/ActivityFinder'
import BitcoinRates from './compoents/bitcoinRates'
import RefCounter from './compoents/refCounter'
import VideoPlayer from './compoents/videoPlayer'
import ReducerCounter from './compoents/reducerCounter'
import PostListReducer from './compoents/postListReducer'
import SubscribeForm from './compoents/SubscribeForm'
import { UserProvider } from './context/UserContext'
import LoginForm from './compoents/LoginForm'
import MyThemeProvider from './context/MyThemeProvider'
import Emoji from './compoents/Emoji'
import { EmojiProvider } from './context/EmojiContext'
import AppRoutes from './Routes/AppRoutes'
import NavBar from './compoents/Navbar'
import ThemeSwitcher from './compoents/ThemeSwitcher'
import BtcNavBar from './compoents/BtcNavBar'

function App() {
  return (
    <div className="App">
      <UserProvider> {/* provider component is at top level */}
      <MyThemeProvider>
      {/* <h1>Welcom to My App</h1> */}
      {/* <Clock/> */}
      {/* <ActivityFinder/> */}
      {/* <BitcoinRates/> */}
      {/* <RefCounter/> */}
      {/* <VideoPlayer/> */}
      {/* <ReducerCounter/> */}
      {/* <PostListReducer/> */}
      {/* <SubscribeForm/> */}
      {/* <LoginForm/> */}
      {/* <NavBar/> */}
      <AppRoutes/>
      </MyThemeProvider> 
      <BtcNavBar/>
      <ThemeSwitcher/>
      </UserProvider>
      {/* <EmojiProvider>
        <Emoji/>
        <BitcoinRates/>
      </EmojiProvider> */}

    </div>
    
  )
}

export default App