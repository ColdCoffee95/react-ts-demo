import React, { FC, useState } from "react";
import { Layout } from "antd";

import GlobalHeader from './GlobalHeader';
import ContentComponent from './ContentComponent';
import { Switch, Redirect } from 'react-router-dom';
import { routes as routerConfig } from "../../routers/routerConfig";
import SiderMenu from './SiderMenu';
const styles = require('./index.less');

interface LayoutProps {
  footer: string,
}
const GlobalLayout: FC<LayoutProps> = (props: LayoutProps) => {
  const { Header, Footer, Sider, Content } = Layout;
  const [collapsed, setcollapsed] = useState(false);
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
              <ContentComponent key={route.id} {...route}></ContentComponent>
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