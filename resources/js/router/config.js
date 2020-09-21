import { LayoutAuth, LayoutDefault, RouteWrapper } from '../components/layouts'
import LayoutVerify from '../components/layouts/LayoutVerify'

export const publicRoute = [
  {
    path: '*',
    component: () => import('../views/error/NotFound')
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Register'
    },
    redirect: '/auth/register',
    hidden: true,
    children: [
      {
        path: 'register',
        name: 'register',
        meta: {
          title: 'Register'
        },
        component: () => import('../views/auth/Register')
      }
    ]
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Login'
    },
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          title: 'Login'
        },
        component: () => import('../views/auth/Login')
      }
    ]
  },
  {
    path: '/auth',
    component: LayoutAuth,
    meta: {
      title: 'Forgot'
    },
    redirect: '/auth/forgot',
    hidden: true,
    children: [
      {
        path: 'forgot',
        name: 'forgot',
        meta: {
          title: 'Forgot Password'
        },
        component: () => import('../views/auth/Forgot')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: 'Not Found'
    },
    component: () => import('../views/error/NotFound')
  },
  {
    path: '/500',
    name: '500',
    meta: {
      title: 'Server Error'
    },
    component: () => import('../views/error/Error')
  },
  {
    path: '/password/reset/:hash',
    component: LayoutAuth,
    hidden: true,
    children: [
      {
        path: '/password/reset/:hash',
        name: 'reset_password',
        meta: {
          title: 'Reset Password'
        },
        component: () => import('../views/auth/ResetPassword')
      }
    ]
  }
]

export const protectedRoute = [
  {
    path: '/',
    component: LayoutDefault,
    meta: {
      title: 'home',
      group: 'apps',
      icon: ''
    },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          group: 'apps',
          icon: 'mdi-view-dashboard',
          requiresAuth: true
        },
        component: () => import('../views/Dashboard')
      },
      {
        path: '/403',
        name: 'Forbidden',
        meta: {
          title: 'access_denied',
          hiddenInMenu: true,
          requiresAuth: true
        },
        component: () => import('../views/error/Deny')
      },
      {
        path: '/user/profile',
        name: 'Profile',
        meta: {
          title: 'profile',
          hiddenInMenu: true,
          requiresAuth: true
        },
        component: () => import('../views/auth/Profile')
      },
      {
        path: '/resume',
        component: RouteWrapper,
        redirect: '/dashboard/resume',
        meta: {
          title: 'resume',
          icon: 'mdi-chart-bar',
          requiresAuth: true,
          group: 'resume'
        },
        children: [
          {
            path: '/resume/sell_product.list',
            name: 'sell_product',
            meta: {
              title: 'sell_product',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          },
          {
            path: '/resume/sell_category.list',
            name: 'sell_category',
            meta: {
              title: 'sell_category',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          },
          {
            path: '/resume/sell_user.list',
            name: 'sell_user',
            meta: {
              title: 'sell_user',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          },
          {
            path: '/resume/sell_types_payment.list',
            name: 'sell_types_payment',
            meta: {
              title: 'sell_types_payment',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          }
        ]
      },
      {
        path: '/articles',
        component: RouteWrapper,
        redirect: '/dashboard/articles',
        meta: {
          title: 'articles',
          icon: 'mdi-shopping',
          requiresAuth: true,
          group: 'articles'
        },
        children: [
          {
            path: '/articles/product.list',
            name: 'product_list',
            meta: {
              title: 'product_list',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          },
          {
            path: '/articles/category.list',
            name: 'category_list',
            meta: {
              title: 'category_list',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          },
          {
            path: '/articles/modifiers.list',
            name: 'modifiers_list',
            meta: {
              title: 'modifiers_list',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          },
          {
            path: '/articles/discounts.list',
            name: 'discounts_list',
            meta: {
              title: 'discounts_list',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          }
        ]
      },
      {
        path: '/users',
        component: RouteWrapper,
        redirect: 'dashboard/users',
        meta: {
          title: 'user',
          icon: 'mdi-account-star',
          group: 'user'
        },
        children: [
          {
            path: '/users/user.list',
            name: 'user_list',
            meta: {
              title: 'user_list',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/user/ListUser')
          }, {
            path: '/users/access.list',
            name: 'access',
            meta: {
              title: 'access',
              icon: 'mdi-account-key'
            },
            component: () => import('../views/access/ListAccess')
          }
        ]
      },
      {
        path: '/clients',
        component: RouteWrapper,
        redirect: 'dashboard/clients',
        meta: {
          title: 'client',
          icon: 'mdi-account-multiple',
          group: 'clients',
          requiresAuth: true
        },
        children: [
          {
            path: '/clients/client.list',
            name: 'clients_list',
            meta: {
              title: 'client_list',
              icon: 'mdi-database-plus'
            },
            component: () => import('../views/error/Deny')
          }
        ]
      },
      {
        path: '/setting',
        meta: {
          title: 'setting',
          icon: 'mdi-wrench',
          requiresAuth: true
        },
        component: () => import('../views/general/General')
      }
    ]
  },
  {
    path: '/hi',
    component: LayoutVerify,
    meta: {
      title: 'verify'
    },
    redirect: '/hi/welcome',
    hidden: true,
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        meta: {
          title: 'welcome',
          hiddenInMenu: true,
          requiresAuth: true
        },
        component: () => import('../views/Welcome')
      },
      {
        path: 'verify/:hash',
        name: 'verify',
        props: true,
        meta: {
          title: 'verify',
          hiddenInMenu: true,
          requiresAuth: true
        },
        component: () => import('../views/auth/Verify')
      }
    ]
  }
]
