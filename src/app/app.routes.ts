import { Routes }   from '@angular/router';
import { Home }     from './home/home';
import { About }    from './about/about';
import { Details }  from './details/details';
import { Login }    from './login/login';

export const routes: Routes = [
    { path: ''      ,       component: Home    },
    { path: 'about' ,       component: About   },
    { path: 'details/:id',  component: Details },
    { path: 'login' ,       component: Login   }
];