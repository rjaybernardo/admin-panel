import PersonOutlined from '@mui/icons-material/PersonOutlined'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import './widget.scss'

const Widget = () => {
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>USERS</span>
        <span className='counter'>23231</span>
        <span className='link'>See al user</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          20% %
        </div>
        <PersonOutlined className='icon' />
      </div>
    </div>
  )
}

export default Widget
