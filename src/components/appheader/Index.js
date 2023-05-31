import { Badge, Space, Typography, Avatar, Popover, Button } from 'antd';
import { BellOutlined, SearchOutlined, AlignRightOutlined, SketchOutlined } from "@ant-design/icons";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <div className='appheader'>
      <Typography.Title><SketchOutlined />Daimond</Typography.Title>
      <Typography.Title className='text'>Daimond</Typography.Title>
      <Space>
        <SearchOutlined style={{ fontSize: 25, cursor: "pointer" }} />
        <Badge count={5}>
          <BellOutlined style={{ fontSize: 25, cursor: "pointer" }} />
        </Badge>

        <AlignRightOutlined
          style={{ fontSize: 25, cursor: "pointer" }} />
        <Popover
          trigger="click"
          content={<>
            <Button type='primary' onClick={handleLogout}>LogOut</Button>
          </>}>
          <Avatar size={40} style={{ cursor: "pointer" }}>USER</Avatar>
        </Popover>
      </Space>
    </div>
  )
}

export default AppHeader;