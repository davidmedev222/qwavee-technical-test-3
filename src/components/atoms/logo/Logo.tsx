import { LogoTextIcon, StoreIcon } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function Logo() {
  return (
    <Link className='logo' href={Routes.Home}>
      <StoreIcon />
      <LogoTextIcon />
    </Link>
  )
}

export default Logo
