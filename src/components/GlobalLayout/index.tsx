import React, { FC, useState } from "react";
import { Layout, Menu } from "antd";

import GlobalHeader from './GlobalHeader';
import ContentComponent from './ContentComponent';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import routerConfig from "../../routers/routerConfig";
import SiderMenu from './SiderMenu';
const styles = require('./index.less');

interface LayoutProps {
  footer: string,
}
const GlobalLayout: FC<LayoutProps> = (props: LayoutProps) => {
  const { Header, Footer, Sider, Content } = Layout;
  const [collapsed, setcollapsed] = useState(false);
  console.log('routerConfig', routerConfig);
  return <Layout className={styles.globalLayout}>
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(childCollapsed): void => setcollapsed(childCollapsed)}>
      <SiderMenu />
    </Sider>
    <Layout>
      <Header className={styles.globalHeader}>
        <GlobalHeader
          collapsed={collapsed}
          onCollapsedChange={(childCollapsed: boolean): void => setcollapsed(!childCollapsed)}
        />
      </Header>
      <Content>
        <Switch>
          {
            routerConfig.filter(r => r.path).map(route => (
              <ContentComponent component={route.component as FC} path={route.path as string} name={route.name} key={route.id}></ContentComponent>
            ))
          }
          <Redirect to='/404'></Redirect>
        </Switch>
      </Content>
      <Footer>{props.footer}</Footer>
    </Layout>
  </Layout>;

};
export default GlobalLayout;