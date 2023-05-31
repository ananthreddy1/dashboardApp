import React from 'react';
import { Space } from 'antd';
import AppRoutes from '../approutes/Index';



const PageContent = () => {
  return (
    <div className='pagecontent'>
      <Space>
        <AppRoutes />
      </Space>
    </div>
  )
}

export default PageContent;