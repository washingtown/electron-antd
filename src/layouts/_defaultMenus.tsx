import { MenuDataItem } from '@ant-design/pro-layout'
const DefaultMenus: MenuDataItem[] = [
  {
    path: '/home',
    name: 'Home',
    icon: 'HomeOutlined',
  },
  {
    path: '/example',
    name: 'Example',
    icon: 'BarsOutlined',
    children: [
      {
        path: '/example/counter',
        name: 'Counter',
        icon: 'PlusOutlined',
      },
      {
        path: '/example/files',
        name: 'Local File',
        icon: 'BarsOutlined',
      },
    ],
  },
  
];
export default DefaultMenus