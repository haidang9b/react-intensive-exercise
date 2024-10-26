import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/account">Account</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">Cart</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/products">Products</Link>
        </Menu.Item>
      </Menu>
      <Dropdown overlay={menu} placement="bottomRight">
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <UserOutlined />
        </a>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;