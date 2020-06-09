import React, { FC } from "react";
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import routerConfig from "../../../routers/routerConfig";

interface ContentComponentInterface {
    path: string,
    name: string,
    component: FC,
}
interface RouteInterface {
    id: number;
    path?: string;
    name: string;
    icon?: FC;
    component?: FC;
    pid?: number;
    isMenu?: boolean;
}
const ContentComponent: FC<ContentComponentInterface> = (props: ContentComponentInterface) => {
    //递归寻找当前路由前的面包屑
    function findRouteParent(arr: RouteInterface[], currentRoute: RouteInterface): Array<RouteInterface> {
        currentRoute.path && arr.unshift(currentRoute);
        if (currentRoute.pid) {
            const findRoute = routerConfig.find(r => r.id === currentRoute.pid);
            findRouteParent(arr, findRoute as RouteInterface);
        }
        return arr;
    }
    //获取面包屑列表
    function getBreadcrumbItems(): Array<RouteInterface> {
        const location = useLocation();
        console.log('location', location);
        let arr: RouteInterface[] = [];
        const currentRoute = routerConfig.find(r => r.path === location.pathname);
        arr = findRouteParent(arr, currentRoute as RouteInterface);
        return arr;
    }
    const breadcrumbItems = getBreadcrumbItems();
    console.log('breadcrumbItems',breadcrumbItems);
    return <div>
        <Breadcrumb>
            {
                breadcrumbItems.map(b => (
                    <Breadcrumb.Item key={b.id}>
                        <Link to={b.path as string}>{b.name}</Link>
                    </Breadcrumb.Item>
                ))
            }

        </Breadcrumb>
        <Route path={props.path}>
            <props.component></props.component>
        </Route>
    </div>;
};
export default ContentComponent;