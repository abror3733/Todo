import React from 'react'

import elBackspacIcon from "../assets/Images/backspace-reverse.svg"

function Modal({children,showModal,setShowModal}) {
  const closeModal =(evt)=>{
  if(evt.target.id =="wrapper" || evt.target.id == "xbtn"){
   setShowModal(false)
  }
  }
  return (
    <div onClick={closeModal} id='wrapper' className={`fixed top-0 bottom-0 right-0 left-0 backdrop-blur-lg ease-in-out transition-[0.5s] ${showModal ? "" : "scale-0"}`}>
      <div className='w-[480px] modal relative bg-[#423568] rounded-md p-5 mx-auto mt-[150px]'>
       <button  className='absolute top-3 right-3'>
           <img id='xbtn' className='cursor-pointer hover:opacity-40 transition-all ease-out' src={elBackspacIcon} alt="icon" width={27} height={27}/>
       </button>
       {children}
      </div>
    </div>
  )
}

export default Modal