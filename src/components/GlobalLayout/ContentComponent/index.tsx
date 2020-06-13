import React, { FC } from "react";
import { Route, Link, matchPath, useLocation } from 'react-router-dom';
import { Breadcrumb, Card } from 'antd';
import { routes as routerConfig, RouteInterface } from "../../../routers/routerConfig";

const ContentComponent: FC<RouteInterface> = (props: RouteInterface) => {
    const { pathname } = useLocation();
    //递归寻找当前路由前的面包屑
    const findRouteParent = (arr: RouteInterface[], currentRoute: RouteInterface): Array<RouteInterface> => {
        currentRoute.path && arr.unshift(currentRoute);
        if (currentRoute.pid) {
            const findRoute = routerConfig.find(r => r.id === currentRoute.pid);
            findRouteParent(arr, findRoute as RouteInterface);
        }
        return arr;
    };
    //获取面包屑列表
    const getBreadcrumbItems = (): Array<RouteInterface> => {
        let arr: RouteInterface[] = [];
        const currentRoute = routerConfig.find(r => {
            const isMatch = matchPath(pathname, {
                path: r.path
            });
            return isMatch && isMatch.isExact;
        });

        arr = findRouteParent(arr, currentRoute as RouteInterface);

        return arr;
    };
    const breadcrumbItems = getBreadcrumbItems();
    return <Card>
        <Breadcrumb>
            {
                breadcrumbItems.map(b => (
                    <Breadcrumb.Item key={b.id}>
                        <Link to={b.path as string}>{b.name}</Link>
                    </Breadcrumb.Item>
                ))
            }

        </Breadcrumb>
        <Route path={props.path} exact={!!props.exact}>
            {props.component && <props.component></props.component>}
        </Route>
    </Card>;
};
export default ContentComponent;