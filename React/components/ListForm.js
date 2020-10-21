import React,{useState} from "react"


function ListForm({ addList }) {
  const [item, setItem] = useState("");
  const [price,setPrice] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!item || !price) return;
    addList(item,price);
    setItem("");
    setPrice("");
  };

  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="꼭 사야되는 물건"
        required
        maxLength="10"
        value={item}
        onChange={evt => setItem(evt.target.value)}
      />
      <input
        type="number"
        className="inputVal"
        placeholder="예상 금액"
        required
        max="999999"
        value={price}
        onChange={evt => setPrice(evt.target.value)}
      />
      <button onClick={handleSubmit}>추가</button>
    </form>
  );
}

export default ListForm