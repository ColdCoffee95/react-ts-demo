export const BASEURL = 'http://api.xchanger.cn';
export const ENVMAP = {
    dev: 'development',
	development: 'development',
	beta: 'testing',
	testing: 'testing',
	stage: 'staging',
	staging: 'staging',
	prod: 'production',
	production: 'production',
};
export type XENVTYPE = keyof typeof ENVMAP;
