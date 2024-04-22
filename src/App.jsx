
import './App.css'
import {Button, Layout, Menu} from "antd";

import menuItem from './config/menu.js';
import { Outlet, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const {Header,Content,Footer} = Layout
  const nav = useNavigate();

  useEffect(()=>{
    nav('/home')
  },[])
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
        <Menu 
          mode='horizontal' items={menuItem} theme='dark'
          defaultOpenKeys={'/home'}
          defaultSelectedKeys={'/home'}
          onClick={(key) => nav(key.key)}
          />
      </Header>
      <Content style={{height:'100vh'}}>
        <Outlet />
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default App
