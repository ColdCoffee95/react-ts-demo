import React from "react";
import { Layout } from "antd";
import styles from './index.less'

interface ILayoutProps {
  sider: string,
  header: string,
  content: string,
  footer: string,
  children: any
}
export function GlobalLayout(props: ILayoutProps) {
  const { Header, Footer, Sider, Content } = Layout;
  console.log(styles.globalLayout)
  return (
    <Layout className={'globalLayout'}>
      <Sider>{props.sider}</Sider>
      <Layout>
        <Header>{props.header}</Header>
        <Content>{props.content}</Content>
        <Footer>{props.footer}</Footer>
      </Layout>
    </Layout>
  );
}
