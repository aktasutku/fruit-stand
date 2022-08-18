import React, { useEffect, useState } from "react";
import "./produce.css";
import produceListData from "../produce.json";
import Item from "./Item/Item";
// import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const Produce = () => {
  // const [amount, setAmount] = useState(0);

  const [produceList, setProduceList] = useState(
    produceListData.map((produce) => {
      return { ...produce };
    })
  );

  // const HandleIncDec = (e, id) => {
  //   if (e.currentTarget.id === "inc") {
  //     if (amount < 20) setAmount(amount + 1);
  //   } else if (e.currentTarget.id === "dec") {
  //     if (amount > 0) setAmount(amount - 1);
  //   } else if (e.currentTarget.id === "input") {
  //     if (e.currentTarget.value > 20) setAmount(20);
  //     else if (e.currentTarget.value < 0) setAmount(0);
  //     else setAmount(e.currentTarget.value);
  //   }

  //   // console.log(produceList[0].amount)

  //   const newList = produceList.map((item) => {
  //     if (item.id === id) {
  //       const updatedItem = { ...item, amount: amount };
  //       return updatedItem;
  //     }
  //     return item;
  //   });
  //   setProduceList(newList);
  // }

  return (
    <div className="produce">
      {produceList.map((item) => {
        return (
          // <div className="produce_item" key={item.id}>
          //   <img className="item_img" src={item.img} />
          //   <div className="produce_explain">
          //     <div className="produce_explain1">
          //       <h3>{item.name}</h3>
          //       {item.iconOrganic && <img src={item.iconOrganic} />}
          //     </div>
          //     <div className="produce_explain2">
          //       {item.organic === "organic" && <h5>{item.organic}</h5>}
          //       <div className="produce_weight">
          //         <h6>approx.</h6>
          //         {item.weight}
          //       </div>
          //     </div>
          //     <div className="produce_price">
          //       <h3>{item.price} $</h3>
          //     </div>
          //   </div>
          //   <div className="produce_buy">
          //     <button className="produce_cart">Add to Cart</button>
          //     <div className="produce_number">
          //       <button
          //         id="inc"
          //         className="produce_increase"
          //         onClick={(e) => HandleIncDec(e, item.id)}
          //       >
          //         <MdArrowDropUp />
          //       </button>
          //       <input
          //         id="input"
          //         type="text"
          //         className="produce_count"
          //         value={item.amount}
          //         onChange={(e) => HandleIncDec(e, item.id)}
          //       />
          //       <button
          //         id="dec"
          //         className="produce_decrease"
          //         onClick={(e) => HandleIncDec(e, item.id)}
          //       >
          //         <MdArrowDropDown />
          //       </button>
          //     </div>
          //   </div>
          // </div>
          <Item itemData={item}/>
        );
      })}
    </div>
  );
};

export default Produce;
