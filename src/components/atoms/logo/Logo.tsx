import { LogoTextIcon, StoreIcon } from '@/components'
import { Routes } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  /** Optional size of the logo */
  size?: 'lg'
}

function Logo({ size }: Props) {
  return (
    <Link className={clsx('logo', size === 'lg' && 'logo--lg')} href={Routes.Home}>
      <StoreIcon className='logo__icon' />
      <LogoTextIcon className='logo__text' />
    </Link>
  )
}

export default Logo
