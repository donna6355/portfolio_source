import React, { useState } from "react";
import "./app.css";
import List from "./components/List";
import ListForm from "./components/ListForm"

function App() {
  const [lists, setLists] = useState([
    {
      item: "ex)양상추",
      price:2500,
      isCompleted: false
    },
    {
      item: "ex) 토마토",
      price:5000,
      isCompleted: false
    }
  ]);

  const addList = (item,price) => {
    const newLists = [...lists, { item:item,price:parseInt(price),isCompleted:false }];
    setLists(newLists);
  };

  const completeList = index => {
    const newLists = [...lists];
    newLists[index].isCompleted = !newLists[index].isCompleted;
    setLists(newLists);
  };

  const removeList = index => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  const totalItem = lists.length;
  let totalBudget = 0;
  for(let i= 0; i<lists.length;i++){
    totalBudget += lists[i].price
  }


  return (
    <div className="app">
      <h1>장 보러 가는 날</h1>
      <ListForm addList={addList} />
      <div className="shop-list">
        {lists.map((list, index) => (
          <List
            key={index}
            index={index}
            list={list}
            completeList={completeList}
            removeList={removeList}
          />
        ))}
      </div>
      <div className="total">
        오늘 사야될 물건 {totalItem}개<br />
        쓸 수 있는 돈 {totalBudget}원
      </div>
      <a href="./shoppinglist.html">Clear All</a>
      <aside className="kermit">kermit</aside>
    </div>
  );
}

export default App;
