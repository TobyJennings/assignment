routes = [
  {
    path: '/',
    url: '../../views/index.html',
  },
  {
    path: '/about/',
    url: '../../views/about.html',
  },
  {
    path: '/form/',
    url: '../../views/form.html',
  },
  // Left View Pages
  {
    path: '/order/',
    url: '../../views/order.html',
  },
  
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: '../../views/404.html',
  },
];
