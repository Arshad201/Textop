import React from 'react';
import './Alert.css';

const Alert = ({alertData}) => {
  return (
    <div className='alert' style={alertData.show ? {display : 'block'} : {display : 'none'}}>
      {alertData.message}
    </div>
  )
}

export default Alert
