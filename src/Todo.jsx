import { useEffect, useState } from "react";

const Todo = () => {
  //   const [text, setText] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productsList, setProductsList] = useState([]);
  //   let inputValue = "howar";
  // input
  // store
  //'https://dummyjson.com/products'

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.products);
        // for(let i=0;i<res.products.length;i++){
        //     console.log("hi",res.products[i].id)
        // }
      });
  }, []);

  const onChange = (e) => {
    // inputValue = e.target.value;
    // let p = document.getElementById("hell")
    // p.innerHTML = inputValue
    setText(e.target.value);
    console.log("onChange", inputValue, text);
  };
  const handleProductSelect = (p) => {
    setProductsList([p]);
    setProductsList([...p,newP])

  };

  return (
    <div style={{ width: 200, height: 200 }}>
      <p>selected</p>
      <ul>
        {productsList.map((p) => {
          return (
            <li key={p.id} onClick={() => handleProductSelect(p)}>
              {p.title}
            </li>
          );
        })}
      </ul>

      
<p>unselected</p>
      <ul>
        {products.map((p) => {
          return (
            <li key={p.id} onClick={() => handleProductSelect(p)}>
              {p.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
