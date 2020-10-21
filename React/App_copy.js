import React, { useState } from "react";
import "./app.css";

function List({ list, index, completeList, removeList }) {
  return (
    <div
      className="list"
      style={{ textDecoration: list.isCompleted ? "line-through" : "" }}
    >
      <button onClick={() => completeList(index)}>done</button>
      <span>{list.item}</span>
      <span>{list.price}</span>
      <button onClick={() => removeList(index)}>x</button>

    </div>
  );
}

function ListForm({ addList }) {
  const [item, setItem] = useState("");
  const [price,setPrice] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!item || !price) return;
    addList(item,price);
    setItem("");
    setPrice("");
  };

  return (
    <form>
      <input
        type="text"
        className="input"
        placeholder="꼭 사야되는 물건"
        value={item}
        onChange={e => setItem(e.target.value)}
        />
      <input
        type="number"
        className="inputVal"
        placeholder="예상 금액"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </form>
  );
}

function App() {
  const [lists, setLists] = useState([
    {
      item: "ex)양상추",
      price:3000,
      isCompleted: false
    },
    {
      item: "ex) 토마토",
      price:2000,
      isCompleted: false
    },
    {
      item: "ex) 상추",
      price:4000,
      isCompleted: false
    }
  ]);

  const addList = (item,price) => {
    const newLists = [...lists, { item:item,price:parseInt(price),isCompleted:false }];
    setLists(newLists);
  };

  const completeList = index => {
    const newLists = [...lists];
    newLists[index].isCompleted = true;
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
        오늘 사야될 아이템 {totalItem}개
        오늘 쓸 수 있는 예산 {totalBudget}원
      </div>
    </div>
  );
}

export default App;
