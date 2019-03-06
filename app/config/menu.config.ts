export function menuConfig() {
  return [
    {
      icon: 'home',
      text: '首页',
      path: '/'
    },
    {
      icon: 'info',
      text: '登陆页',
      path: '/login'
    },
    {
      icon: 'event',
      text: '组件',
      path: '/com',
      children: [
        {
          text: 'Foo',
          path: '/com/foo'
        },
        {
          text: 'Bar',
          path: '/com/bar'
        }
      ]
    }
  ];
}
