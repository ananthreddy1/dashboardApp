import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  ShoppingCartOutlined
}
  from "@ant-design/icons";
import { useLocation, useNavigate } from 'react-router-dom';

const SideMenu = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState('/')

  useEffect(() => {
    const pathName = location.pathname
      setSelectedKeys(pathName)
  },[location.pathname])
  return (
    <div className='sidemenu'>
      <Menu
      onClick={(item) => {
        navigate(item.key);
      }}
      selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/"
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/inventory"
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders"
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/customers",
          }
        ]}></Menu>
    </div>
  )
}

export default SideMenu;