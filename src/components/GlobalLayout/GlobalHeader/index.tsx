import React, { FC } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from "antd";
const styles = require('./index.less');

interface HeaderProps {
  onCollapsedChange(collapsed: boolean): void;
  collapsed: boolean;
}

const GlobalHeader: FC<HeaderProps> = (props: HeaderProps) => {
  const dropdownMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          修改密码
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          帮助
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
  return <div className={styles.headerContainer}>
    {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: () => props.onCollapsedChange(props.collapsed),
    })}
    <Dropdown overlay={dropdownMenu}>
      <a className={styles.userInfo} onClick={(e): void => e.preventDefault()}>
        <Avatar size="small" />
        <span className={styles.userName}>username</span>
      </a>
    </Dropdown>
  </div>;
};
export default GlobalHeader;