import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import Header from "./components/Header";
import Checklist from "./components/Checklist";
import Input from "./components/Input";

function App() {
   const [items, setItems] = useState([]);

   useEffect(() => {
         GetItems();
   }, []);

    const GetItems = async () => {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:8000/tasks',
        })
        setItems(response.data);
    }

   const OnAddTask = async (input) => {
       const response = await axios({
           method: 'post',
           url: 'http://localhost:8000/task',
           data: {
               description: input
           }
       })
       console.log(response.data);
       await GetItems();
   }

   const OnItemChecked = async (taskId, isChecked) => {
         const response = await axios({
              method: 'put',
              url: `http://localhost:8000/task/${taskId}`,
              data: {
                isCompleted: isChecked
              }
         })
         console.log(response.data);
         await GetItems();
   }

    const OnDeleteItem = async (itemId) => {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:8000/task/${itemId}`,
        })
        console.log(response.data);
        await GetItems();
    }

  return (
      <div className={"myapp"}>
        <Header />
        <Input OnAddTask={(input) => OnAddTask(input)}/>
        <Checklist items={items} OnItemChecked={(taskId, isChecked) => OnItemChecked(taskId, isChecked)} OnDeleteItem={(itemId) => OnDeleteItem(itemId)}/>
      </div>
  );
}

export default App;
