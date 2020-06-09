import React, { FC, useState } from "react";
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import routerConfig from "../../../routers/routerConfig";

const { SubMenu } = Menu;
// interface ContentComponentInterface {
//     path: string,
//     name: string,
//     component: FC
// }
const SiderMenu: FC = (props: any) => {
  //通过当前路由选中相应菜单
  function getDefaultKeys(type: string): Array<string> {
    const { pathname } = useLocation();
    let pid = -1, childId = -1;
    routerConfig.forEach(route => {
      const findThing = routerConfig.filter(r => r.pid === route.id).find(child => child.path === pathname);
      if (findThing) {
        pid = route.id;
        childId = findThing.id;
      }
    });
    if (type === 'subMenu') {
      return [String(pid)];
    }
    return [String(childId)];
  }

  return <Menu
    mode="inline"
    theme="dark"
    defaultOpenKeys={getDefaultKeys('subMenu')}
    defaultSelectedKeys={getDefaultKeys('menu')}
    >
    {
      routerConfig.filter(r => !r.pid && r.isMenu !== false).map(route => (
        <SubMenu key={route.id} title={route.name} icon={route.icon && <route.icon></route.icon>}>
          {
            routerConfig.filter(c => c.pid === route.id && c.isMenu !== false).map((child, childIndex) => (
              <Menu.Item key={child.id} icon={route.icon && <route.icon></route.icon>}>
                <Link to={child.path as string}>{child.name}</Link>
              </Menu.Item>
            ))
          }
        </SubMenu>
      ))
    }
  </Menu>;
};
export default SiderMenu;