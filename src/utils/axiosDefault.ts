import { BASEURL, ENVMAP, XENVTYPE } from "./constSet";
export default {
  "timeout": 10000, //10s后请求超时
  "headers": {},
  "baseUrl": BASEURL,
  "X-ENV-TYPE": window.config.x_env_type
    ? ENVMAP[window.config.x_env_type as XENVTYPE]
    : "testing",
};
