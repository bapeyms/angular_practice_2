import { Routes } from '@angular/router';
import { Sonya } from './sonya/sonya';
import { Olya } from './olya/olya';
import { Cake } from './cake/cake';
import { Katya } from './katya/katya';

export const routes: Routes = [
    {
        path: '',
        component: Sonya,
        children: [
            {path: '', component: Olya},
            {path: 'marinaHawaiiTravel', component: Olya},
            {path: 'howToGetToTheHawaii', component: Cake},
            {path: 'contacts', component: Katya}
        ],
    },
];
