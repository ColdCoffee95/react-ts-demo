import { FC } from "react";
import { SwitcherOutlined, TranslationOutlined } from "@ant-design/icons";
import DruidIndex from "../pages/Druid";
import DruidDetail from "../pages/Druid/detail";
import MiniIndex from "../pages/Mini";
import NotFound from "../pages/NotFound";

export interface RouteInterface {
  id: number;
  pid: number;
  path?: string;
  name: string;
  icon?: FC;
  component?: FC;
  isMenu?: boolean;
  exact?: boolean;
}
export const routes: Array<RouteInterface> = [
  {
    id: 888,
    pid: 0,
    path: "/",
    exact: true,
    name: "首页",
    isMenu: false,
  },
  {
    id: 1,
    pid: 0,
    name: "druid管理",
    icon: SwitcherOutlined,
  },
  {
    id: 2,
    pid: 1,
    path: "/druid",
    exact: true,
    name: "druid列表",
    icon: SwitcherOutlined,
    component: DruidIndex,
  },
  {
    id: 3,
    pid: 2,
    path: "/druid/:id",
    name: "druid详情",
    component: DruidDetail,
    isMenu: false,
  },
  {
    id: 4,
    pid: 0,
    name: "微前端管理",
    icon: TranslationOutlined,
  },
  {
    id: 5,
    pid: 4,
    path: "/mini/index",
    name: "微前端列表",
    icon: TranslationOutlined,
    component: MiniIndex,
  },
  {
    id: 6,
    pid: 0,
    path: "/mini",
    exact: true,
    name: "微前端列表2",
    icon: TranslationOutlined,
    component: MiniIndex,
  },
  {
    id: 7,
    pid: 6,
    path: "/mini/:id",
    name: "微前端详情",
    component: DruidDetail,
    isMenu: false,
  },
  {
    id: 999,
    pid: 0,
    path: "/404",
    name: "页面找不到",
    component: NotFound,
    isMenu: false,
  },
];
