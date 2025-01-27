import React from 'react'
import {
  Button, 
  Dialog,
  DialogHeader, 
  DialogBody,
  DialogFooter,
  Typography,
  Input
} from '@material-tailwind/react'

interface LoginProps {
  openModal: boolean
  setOpenModal: Function
}

const Login: React.FC<LoginProps> = ({setOpenModal,openModal}) => {
  console.log('Login component rendered',openModal)
  return (
    <>
      <Dialog open = {openModal} handler={() => setOpenModal(!openModal)}  animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
          <DialogHeader>
             <div className='flex flex-col gap-1'>
                <Typography variant='h4' color = 'gray'>Sign In</Typography>
                <Typography variant='h6' color = 'gray'>Please check your mobile +91 9*******48</Typography>
             </div>
          </DialogHeader>
          <DialogBody className='-mt-5'>
                <Typography className='my-2' color='gray'>Your OTP</Typography>
                <Input color='gray' className='' label='OTP' placeholder='Enter your otp' type='password' maxLength={8} size='lg' crossOrigin={() => {}}/>   

                {/* <Typography className='my-2'>Your Password</Typography>
                <Input color='purple' className='' label='Password' size='lg' crossOrigin={() => {}}/>    */}
          </DialogBody> 
          <DialogFooter>
              <Button className='mx-2 rounded-full' color='blue-gray' variant='filled' onClick={() => setOpenModal(!openModal)}>Sign In</Button>
              <Button className='mx-2 rounded-full' color='blue-gray' variant='filled' onClick={() => setOpenModal(!openModal)}>Close</Button>
          </DialogFooter>
      </Dialog>
    </> 
  )
}

export default Login