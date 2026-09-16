import { Routes }   from '@angular/router';
import { Home }     from './home/home';
import { About }    from './about/about';
import { Details }  from './details/details';

export const routes: Routes = [
    { path: ''      ,       component: Home },
    { path: 'about' ,       component: About },
    { path: 'details/:id',  component: Details }
];