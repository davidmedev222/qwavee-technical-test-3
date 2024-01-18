import { MenuIcon } from '@/components'

interface Props {
  /** The CSS class name of the component */
  className: string
  /** The event handler for the click event on the button */
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
