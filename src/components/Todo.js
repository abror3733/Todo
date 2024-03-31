import React, { useState } from 'react'

import { Toaster, toast } from 'react-hot-toast';
import elDelete from "../assets/Images/trash.svg"
import elEdit from "../assets/Images/pencil-square.svg"
import Modal from './Modal'

function Todo({ todo, setTodo }) {
  const [showModal, setShowModal] = useState(false);
  const [deleteshowModal, setDeleteShowModal] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [updateId, setUpdateId] = useState(null);

  const handleUpdatebtn = (evt) => {
    setShowModal(true);
    const itemId = evt.currentTarget.id;
    const data = todo.find((item) => item.id === parseInt(itemId));
    setUpdateValue(data.value);
    setUpdateId(parseInt(itemId));
  };
  //update btn
  const updateSubmitForm = (evt) => {
    evt.preventDefault();
    const updatedTodo = todo.find(item => item.id === updateId);
    updatedTodo.value = updateValue;
    setShowModal(false);
    setTimeout(() => {
      toast.success("Ma'lumot o'zgartirildi !");
    },1000);
    setTodo([...todo])
  };

  const [deleteId, setDeleteId] = useState(null);
   const handleDeleteBtn = (evt)=>{
  setDeleteShowModal(true)
  setDeleteId(evt.target.id)

  //update btn
   }
   const handleDeleteClick = () => {
    const updatedTodoList = todo.findIndex(item => item.id == deleteId);
    todo.splice(updatedTodoList,1)
    setDeleteShowModal(false);
    toast.success("Ma'lumot o'chirildi!");
    setTodo([...todo])
  };
  

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>     
      <div>
        {todo.length > 0 &&
          todo.map((item, index) => (
            <div className="Todo flex items-center justify-between" key={index}>
              <li>{item.value}</li>
              <div className="flex items-center space-x-2">
                <button id={item.id} onClick={handleUpdatebtn}>
                  {" "}
                  <img
                    className="hover:scale-110 transition-all ease-out"
                    src={elEdit}
                    alt="Edit Icon"
                    width={20}
                    height={20}
                  />
                </button>
                <button id={item.id} onClick={handleDeleteBtn}>
                  <img id={item.id}
                    className="hover:scale-110 transition-all ease-out"
                    src={elDelete}
                    alt="Delete Icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          ))}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form onSubmit={updateSubmitForm} className="TodoForm ">
          <h1>Update Todo</h1>
          <input
            onChange={(evt) => setUpdateValue(evt.target.value)}
            value={updateValue}
            className="todo-input border-[1px] border-solid border-[#1A1A40] py-4 mr-5 rounded-md"
            type="text"
            name="todoValue"
            placeholder="Enter your update todo...."
            required
            autoComplete="off"
          />
          <button
            className="text-[white] bg-[#1A1A40] py-2 px-5 rounded-md hover:opacity-60  transition ease-in-out"
            type="submit"
          >
            Ok
          </button>
        </form>
      </Modal>
      <Modal showModal={deleteshowModal} setShowModal={setDeleteShowModal}>
        <h1 className='text-[30px]'>Delete your Todo ?</h1>
          <div className='flex items-center space-x-20 mx-auto justify-center mt-[30px]'>
          <button onClick={()=> setDeleteShowModal(false)}
            className="text-[white] bg-[#1A1A40] py-2 px-5 rounded-md hover:opacity-60  transition ease-in-out"
          >Cancel</button>
          <button onClick={handleDeleteClick}
            className="text-[white] bg-[#1A1A40] py-2 px-5 rounded-md hover:opacity-60  transition ease-in-out"
          >Delete</button>
          </div>
      </Modal>
    </>
  );
}

export default Todo;
