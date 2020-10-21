import React from "react"

function List({ list, index, completeList, removeList }) {
  return (
    <div className="list" >
      <button className={ list.isCompleted ? "cartin full" : "cartin" } onClick={() => completeList(index)}>샀음</button>
      <p className={ list.isCompleted ? "done" : "" }>
        <span className="item">{list.item}</span>
        <span className="price">{list.price}원</span>
      </p>
      <button onClick={() => removeList(index)}>지움</button>
    </div>
  );
}


export default List