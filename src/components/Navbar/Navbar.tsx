import Search from './Search'

import './Navbar.scss'
const Navbar = (props: { onSearch: any }) => {
  return (
    <nav className="navbar">
      <Search onSearch={props.onSearch} />
    </nav>
  )
}

export default Navbar
