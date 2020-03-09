const MENU_LINKS = [
  {
    icon: 'view-dashboard-variant',
    name: 'Dashboard',
    path: '/',
  },
  {
    icon: 'playlist-music',
    name: 'Podcasts',
    path: '/podcasts',
  },
  {
    icon: 'star',
    name: 'Favorites',
    path: '/favorites',
  },
  {
    icon: 'led-outline',
    name: 'About',
    path: '/about',
  },
];

export default {
  name: 'MenuDrawer',
  data() {
    return {
      drawer: true,
      links: MENU_LINKS,
      mini: true,
    };
  },
};
