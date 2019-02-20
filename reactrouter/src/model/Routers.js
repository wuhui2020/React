import Home from '../components/Home';
import News from '../components/News';
import User from '../components/User';
import NewsDetail from '../components/NewsDetail';
import Item from '../components/Item';
import ItemDetail from '../components/ItemDetail';
import Login from '../components/Login';
import Main from '../components/user/Main';
import Info from '../components/user/Info';


const routes = [
    {
      path:'/',
      component:Home,
      exact:true
    },
    {
      path:'/user',
      component:User,
      routes:[
        {
          path:"/user/",
          component:Main,
          exact:true
        },
        {
          path:"/user/info",
          component:Info
        }
      ]
    },
    {
      path:'/item',
      component:Item
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/itemDetail/:id',
      component:ItemDetail
    },
    {
      path:'/newsDetail',
      component:NewsDetail
    }
  
  ]
  export default routes;