import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Layout, Menu} from "antd";

function App() {
  const {Header,Content,Footer} = Layout
  const menuItem = [
    {
      key:"/home",
      label:'home'
    },{
      key:"/video",
      label:"video"
    },{
      key:"/user",
      label:"user"
    }
  ]
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
        <Button type='primary'>antd</Button>
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default App
