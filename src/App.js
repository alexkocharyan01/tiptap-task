import { useState } from 'react';
import './App.css';
import Tiptap from './components/TipTap/Tiptap';
import { useForm } from "react-hook-form";

function App() {

  const [user, setUser] = useState();

  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    
    let randomColor = Math.floor(Math.random()*16777215).toString(16)  
    let color = "#" + randomColor;
    
    const newUser = {
      userName: data.name,
      color
    };
    setUser(newUser);
  }

  return (
    <div className="App">
      {
        user ? (
          <Tiptap user={user}/>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true })} />
            <button type="submit">Create User</button>
          </form>
        )
      }
    </div>
  );
}

export default App;
