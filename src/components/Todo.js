import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'; // react-hot-toast paketidan Toaster va toast ni import qilamiz
import elDelete from "../assets/Images/trash.svg"
import elEdit from "../assets/Images/pencil-square.svg"
import Modal from './Modal'

function Todo({ todo, setTodo }) {
  const [showModal, setShowModal] = useState(false);
  const [deleteshowModal, setDeleteShowModal] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [updateId, setUpdateId] = useState(null);


  // Todo elementini yangilash uchun modal oynani ochish
  const handleUpdatebtn = (evt) => {
    setShowModal(true);
    const itemId = evt.currentTarget.id;
    const data = todo.find((item) => item.id === parseInt(itemId));
    setUpdateValue(data.value);
    setUpdateId(parseInt(itemId));
  };

  // Ma'lumotni yangilash va modal oynani yopish
  const updateSubmitForm = (evt) => {
    evt.preventDefault();
    
    // Yangilangan todo ni topish
    const updatedTodo = todo.find(item => item.id === updateId);

    // Yangi qiymatni o'zgartirish
    updatedTodo.value = updateValue;

    // Modal oynani yopish
    setShowModal(false);

    // Xabar chiqarish
    setTimeout(() => {
      toast.success("Ma'lumot o'zgartirildi !");
    },1000);
  };

  // delete btn 
  const [deleteId, setDeleteId] = useState(null);
   const handleDeleteBtn = (evt)=>{
  setDeleteShowModal(true)
  setDeleteId(evt.target.id)
   }
   const handleDeleteClick = (evt) => {
    const updatedTodoList = todo.filter(item => item.id !== deleteId);
    todo.splice(updatedTodoList,1)
    // setTodo(updatedTodoList);
    setDeleteShowModal(false);
    toast.success("Ma'lumot o'chirildi");
  };
  

  return (
    <>
      {/* Toast xabarlarini ko'rsatish uchun Toaster komponenti */}
      <Toaster position="top-center" reverseOrder={false}/>     

      <div>
        {/* Todo elementlarini ko'rsatish */}
        {todo.length > 0 &&
          todo.map((item, index) => (
            <div className="Todo flex items-center justify-between" key={index}>
              <li>{item.value}</li>
              <div className="flex items-center space-x-2">
                {/* Todo elementini yangilash tugmasi */}
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
                {/* Todo elementini o'chirish tugmasi */}
                <button id={item.id} onClick={handleDeleteBtn}>
                  <img
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

      {/* Modal oynani ko'rsatish */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {/* Todo elementini yangilash uchun forma */}
        <form onSubmit={updateSubmitForm} className="TodoForm ">
          <h1>Update Todo</h1>
          {/* Yangi todo qiymatini kiritish inputi */}
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
          {/* Yangilashni tasdiqlash tugmasi */}
          <button
            className="text-[white] bg-[#1A1A40] py-2 px-5 rounded-md hover:opacity-60  transition ease-in-out"
            type="submit"
          >
            Ok
          </button>
        </form>
      </Modal>
      <Modal showModal={deleteshowModal} setShowModal={setDeleteShowModal}>
        {/* Todo elementini yangilash uchun forma */}
        <h1 className='text-[30px]'>Delete your Todo ?</h1>
          {/* Yangilashni tasdiqlash tugmasi */}
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
