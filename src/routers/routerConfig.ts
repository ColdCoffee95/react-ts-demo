import { FC } from "react";
import { SwitcherOutlined, TranslationOutlined } from "@ant-design/icons";
import DruidIndex from "../pages/Druid";
import DruidDetail from "../pages/Druid/detail";
import MiniIndex from "../pages/Mini";
import NotFound from "../pages/NotFound";

interface RouteInterface {
  id: number;
  pid: number;
  path?: string;
  name: string;
  icon?: FC;
  component?: FC;
  isMenu?: boolean;
}
const routes: Array<RouteInterface> = [
  {
    id: 1,
    pid: 0,
    name: "druid管理",
    icon: SwitcherOutlined,
  },
  {
    id: 2,
    pid: 1,
    path: "/druid/list",
    name: "druid列表",
    icon: SwitcherOutlined,
    component: DruidIndex,
  },
  {
    id: 3,
    pid: 1,
    path: '/druid/detail/:id',
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
    id: 999,
    pid: 0,
    path: "/404",
    name: "页面找不到",
    component: NotFound,
    isMenu: false,
  },
];
export default routes;
