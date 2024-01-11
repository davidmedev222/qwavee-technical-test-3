export const enum Routes {
  Home = '/',
  Marketplace = '/marketplace',
  Rankings = '/rankings',
  ConnectWallet = '/connect-wallet',
  CreateAccount = '/create-account'
}

export const NavRoutes = [
  {
    name: 'Marketplace',
    path: Routes.Marketplace
  },
  {
    name: 'Rankings',
    path: Routes.Rankings
  },
  {
    name: 'Connect a wallet',
    path: Routes.ConnectWallet
  }
]
