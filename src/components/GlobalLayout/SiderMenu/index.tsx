import React, { FC, useState, useEffect } from "react";
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Menu } from 'antd';
import { routes as routerConfig, RouteInterface } from "../../../routers/routerConfig";

const { SubMenu } = Menu;

const SiderMenu: FC = () => {
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  //递归寻找应该展开的一级菜单
  const findOpenKeys = (route: string[], currentRoute: RouteInterface): Array<string> => {
    currentRoute.pid === 0 && route.push(String(currentRoute.id));
    if (currentRoute.pid) {
      const findRoute = routerConfig.find(r => r.id === currentRoute.pid);
      findOpenKeys(route, findRoute as RouteInterface);
    }
    return route;
  };
  //递归寻找应该选中的二级菜单
  const findSelectedKeys = (route: string[], currentRoute: RouteInterface): Array<string> => {
    currentRoute.isMenu !== false && route.push(String(currentRoute.id));
    if (currentRoute.isMenu === false) {
      const findRoute = routerConfig.find(r => r.id === currentRoute.pid);
      findSelectedKeys(route, findRoute as RouteInterface);
    }
    return route;
  };
  //通过当前路由选中相应菜单
  const getDefaultKeys = (type: string): Array<string> => {
    const currentRoute = routerConfig.find(r => {
      const isFind = matchPath(pathname, {
        path: r.path
      });
      return isFind?.isExact || false;
    });

    const isFirstPage = currentRoute && !(currentRoute.isMenu === false && currentRoute.pid === 0);

    //如果需要得到默认展开的菜单，需要找到pid为0的route
    if (type === 'open' && isFirstPage) {
      return findOpenKeys([], currentRoute as RouteInterface);
    }
    //如果需要得到默认选中的菜单，需要找到isMenu不为false,的route
    if (type === 'selected' && isFirstPage) {
      return findSelectedKeys([], currentRoute as RouteInterface);
    }
    return [];
  };

  //选中menuitem
  const onClick = (key: string): void => {
    setSelectedKeys([key]);
  };

  //选中一级菜单
  const onOpenChange = (keys: string[]): void => {
    setOpenKeys(keys);
  };

  const defaultOpenKeys = getDefaultKeys('open');
  const defaultSelectedKeys = getDefaultKeys('selected');
  useEffect(() => {
    setOpenKeys(defaultOpenKeys);
    setSelectedKeys(defaultSelectedKeys);
  }, [pathname]);

  return <Menu
    mode="inline"
    theme="dark"
    openKeys={openKeys}
    selectedKeys={selectedKeys}
    onClick={(key): void => onClick(key.key)}
    onOpenChange={onOpenChange}
  >
    {
      routerConfig.filter(r => r.pid === 0 && r.isMenu !== false).map(route => {
        const props = {
          key: route.id,
          title: route.name,
          icon: route.icon && <route.icon></route.icon>
        };
        return route.path ?
          <Menu.Item {...props}>
            <Link to={route.path as string}>{route.name}</Link>
          </Menu.Item> :
          <SubMenu {...props}>
            {
              routerConfig.filter(c => c.pid === route.id && c.isMenu !== false).map(child => (
                <Menu.Item key={child.id} icon={route.icon && <route.icon></route.icon>}>
                  <Link to={child.path as string}>{child.name}</Link>
                </Menu.Item>
              ))
            }
          </SubMenu>;
      })
    }
  </Menu>;
};
export default SiderMenu;