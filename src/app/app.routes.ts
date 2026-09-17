import { Routes }       from '@angular/router';
import { Home }         from './home/home';
import { Store }        from './store/store';
import { About }        from './about/about';
import { Details }      from './details/details';
import { Login }        from './login/login';
import { Signup }       from './signup/signup';
import { User }         from './user/user';
import { Reservation }  from './reservation/reservation';
import { Cart }         from './cart/cart';

export const routes: Routes = [
    { path: ''      ,           component: Home         },
    { path: 'store' ,           component: Store        },
    { path: 'about' ,           component: About        },
    { path: 'details/:id',      component: Details      },
    { path: 'login' ,           component: Login        },
    { path: 'signup',           component: Signup       },
    { path: 'user'  ,           component: User         },
    { path: 'reservation/:id',  component: Reservation  },
    { path: 'cart'  ,           component: Cart         }
];