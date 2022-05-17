import React from 'react'

const Channel = ({channel:{channelName,participants}}) => {
  return (
    <>
        <div className='channel-item'>
            <spam>{channelName}</spam>
            <spam>{participants}</spam>
        </div>
    </>
  )
}

export default Channel