import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Layout, Menu} from "antd";
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.jsx'
import menuItem from './config/menu.js';

function App() {
  const {Header,Content,Footer} = Layout
  return (
    <Layout>
      <Header style={{
        position:'sticky',
        top:0,
        zIndex:1,
        width:'100%',
        display:'flex',
        alignItems:'center'}}>
        <div> <Button type='primary'>antd</Button></div>
        <Menu mode='horizontal' items={menuItem} theme='dark'/>
      </Header>
      <Content style={{height:'100vh'}}>
        <RouterProvider router={routes} />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default App
