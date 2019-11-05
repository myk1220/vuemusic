import Vue from 'vue'
import Router from 'vue-router'

import Home from '../Pages/Home'
import Artists from '../Pages/Artists'
import Mine from '../Pages/Mine'
import Search from '../Pages/Search'
import SongList from '../Pages/SongList'
import Top from '../Pages/Top'
import Player from '../Pages/Player'
import More from '../Pages/MoreMusic'
import NotFound from '../Pages/NotFound'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  linkExactActiveClass:'exact-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/songlist',
      name: 'SongList',
      component: SongList
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/player:id',
      name: 'Player',
      component: Player
    },
    {
      path: '/more:type',
      name: 'More',
      component: More
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
