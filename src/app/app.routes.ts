import { Routes }       from '@angular/router';
import { Home }         from './home/home';
import { About }        from './about/about';
import { Details }      from './details/details';
import { Login }        from './login/login';
import { User }         from './user/user';
import { Reservation }  from './reservation/reservation';

export const routes: Routes = [
    { path: ''      ,           component: Home         },
    { path: 'about' ,           component: About        },
    { path: 'details/:id',      component: Details      },
    { path: 'login' ,           component: Login        },
    { path: 'user'  ,           component: User         },
    { path: 'reservation/:id',  component: Reservation  }
];