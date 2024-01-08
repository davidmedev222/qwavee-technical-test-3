import { MenuIcon } from '@/components'

interface Props {
  className: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function NavMenu({ className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      <MenuIcon />
    </button>
  )
}

export default NavMenu
