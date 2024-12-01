import { defineConfig } from '@umijs/max';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;
const PUBLIC_PATH: string = '/';

export default defineConfig({
  hash: true,
  publicPath: PUBLIC_PATH,
  routes,
  theme: {
    'root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  fastRefresh: true,
  model: {},
  initialState: {},
  title: 'Infinitalk Dialer List',
  layout: {
    locale: true,
    ...defaultSettings,
  },
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  antd: {},
  request: {},
  access: {},
  headScripts: [
    { src: join(PUBLIC_PATH, 'scripts/loading.js'), async: true },
  ],
  presets: ['umi-presets-pro'],
  openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from '@umijs/max'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  mako: {},
  esbuildMinifyIIFE: true,
  requestRecord: {},
});
