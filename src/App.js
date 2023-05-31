import React from 'react';
import './App.css';
import AppRoutes from './components/approutes/Index';
import AppHeader from './components/appheader/Index';
import { Space } from 'antd';
import SideMenu from './components/sidemenu/Index';
import PageContent from './components/pagecontent/Index';
import AppFooter from './components/appfooter/Index';

const App = () => {

  return (
    <div className='app'>
      {/* <AppRoutes /> */}
      <AppHeader />
      <Space className='sidemenuandpagecontent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  )
}

export default App;