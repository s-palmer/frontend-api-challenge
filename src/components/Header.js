import TwitterIcon from '@mui/icons-material/Twitter';
import Button from './Button'

const Header = () => {
  return (
    <nav className="header">
      <TwitterIcon /> <h1>Chitter</h1>
      <Button color={'lightblue'} text={'Log In'}/>
      <Button color={'grey'} text={'Register'} className="btn"/>
    </nav>
  )
}

export default Header