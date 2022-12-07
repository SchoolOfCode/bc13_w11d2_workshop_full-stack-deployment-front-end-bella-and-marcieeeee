import React, { useState, useEffect } from "react";
import InputList from "../InputList";
import ShowList from "../ShowList";
import ClearList from "../ClearList";
import CompletedFilter from "../CompletedFilter";

/* 1. App will contain components which will allow a person to input items into a list, show the items that are in the list, 
and clear all of the items in a list. 
2. In order for the components to interact with one another, some functionality will need to be hoisted into the App component
 */

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

function App() {
  const [list, setList] = useState([]);

  // Fetching shopping list data from shopping list API.
  useEffect(() => {
    async function getShoppingList() {
      const response = await fetch(`${url}/items`);
      const data = await response.json(response);
      //console.log(data);
      setList(data.payload);
    }
    getShoppingList();
  }, []);


  async function addToList(newListItem) {
    //This function changes the state of the list by pushing the text from the input field in to the array.
    const listItemWithoutId = {
      item: newListItem,
      completed: false,
    };

    const response = await fetch(`${url}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ listItem: listItemWithoutId }),
    });

    if (!response.ok) {
      // Shouldn't really use alert, as it blocks, but will do for now.
      return alert("Failed to add item, please try again later.");
    }

    const data = await response.json();
    const listItemWithId = data.payload;

    setList((previous) => [...previous, listItemWithId]);
  }

  async function updateList(listItem, Completed){
    const response = await fetch(`${url}/items`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ listItem: listItem, completed: Completed }),
    });
    return response
  } 

  function clearList() {
    //This function clears all the items that have been added to the list.
    const clearedList = [];
    setList(clearedList);
  }

  async function handleChange(event){
    let response;
    if (event.target.value === 'all'){
       response = await fetch(`${url}/items`);
   } else {
     response = await fetch(`${url}/items?completed=${event.target.value}`);}
    
   const data = await response.json(response);
    //console.log(event.target.value);
    setList(data.payload);
    
  }

  function tickItem(idOfTickedItem) {
    setList((previous) => {
      return previous.map((item) => {
        if(item.id !== idOfTickedItem){
          updateList(item)
          return item
        }else{
          updateList({ ...item, completed: !item.completed })
          return { ...item, completed: !item.completed };
        }
      });
    });
  }

  return (
    <section>

      <InputList addToList={addToList} buttonText={"Add To List"} />
      <CompletedFilter handleChange={handleChange} />
      <ShowList list={list} tickItem={tickItem} />
      <ClearList clearList={clearList} buttonText={"Clear List"} />
    </section>
  );
}

export default App;
