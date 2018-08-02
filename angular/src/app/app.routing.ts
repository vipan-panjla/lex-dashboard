import { Routes } from '@angular/router';
//Layouts
import { 
  CondensedComponent,
  BlankComponent,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout ,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent,
} from './@pages/layouts';

import { DashboardComponent} from './dashboard/dashboard.component';
import { UserComponent} from './user/user.component';
import { AccountComponent} from './account/account.component';
import { BalancesComponent} from './balances/balances.component';
import {TicketComponent } from './ticket/ticket.component';
import {MarketmakerComponent } from './marketmaker/marketmaker.component';
import {ExchangeadminComponent } from './exchangeadmin/exchangeadmin.component';
import {ActivityComponent} from './activity/activity.component'

export const AppRoutes: Routes = [

  {
    path: 'admin',
    data: {
        breadcrumb: 'Home'
    },
    component: CondensedComponent,
    children: [{
      path: '',
      component: UserComponent
    }],
  },
  
  {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'user',
      component: UserComponent
    }],
  },

    {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'balances',
      component: BalancesComponent
    }],
  },

  {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'account',
      component: AccountComponent
    }],
  },

  {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'ticket',
      component: TicketComponent
    }],
  },


  {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'marketmaker',
      component: MarketmakerComponent
    }],
  },
  {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'exchangeadmin',
      component: ExchangeadminComponent
    }],
  },


  {
    path: 'admin',
    component: CondensedComponent,
    children: [{
      path: 'activity',
      component: ActivityComponent
    }],
  },


  // {
  //   path: 'casual',
  //   data: {
  //       breadcrumb: 'Home'
  //   },
  //   component: CasualLayout
  // },


  // {
  //   path: 'executive',
  //   data: {
  //       breadcrumb: 'Home'
  //   },
  //   component: ExecutiveLayout
  // },
  // {
  //   path: 'simplywhite',
  //   data: {
  //       breadcrumb: 'Home'
  //   },
  //   component: SimplyWhiteLayout
  // },
  // {
  //   path: 'corporate',
  //   data: {
  //       breadcrumb: 'Home'
  //   },
  //   component: CorporateLayout
  // },
];
