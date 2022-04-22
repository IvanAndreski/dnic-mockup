import React, { useState } from "react";

import { store } from "../mock_data/store";

function ProductSelect({
  products,
  type,
  setCpu,
  setMobo,
  comp,
  selected,
  setSelected,
}) {
  const [activeProduct, setActiveProduct] = useState();
  const allStores = store;

  const renderSelect = () => {
    return products
      .filter((p) => p.type === type)
      .map((p, i) => (
        <option key={i} value={p.name}>
          {p.name}
        </option>
      ));
  };

  const renderAvailability = () => {
    if (activeProduct === undefined) return;
    const stores = [];
    activeProduct.store.forEach((s) => {
      stores.push(
        allStores.find((element) => {
          return element.id === s;
        })
      );
    });

    return stores.map((s, i) => (
      <img key={i} src={s.image} alt="" height="40x" />
    ));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const product = products.find((element) => {
      return element.name === value;
    });

    // remove old from selected, add new
    console.log(selected);
    let backup = selected.filter((s) => s.type !== product.type);
    setSelected(() => [...backup, product]);

    setActiveProduct(product);
    if (product.type === "cpu") {
      setCpu(product.brand);
    } else if (product.type === "motherboard") {
      setMobo(product.brand);
    }
  };

  return (
    <React.Fragment>
      <tr className={!comp ? "bg-danger" : ""}>
        <th scope="row">{type + ": "}</th>
        <td>{activeProduct !== undefined ? activeProduct.name : "/"}</td>
        <td>{activeProduct !== undefined ? activeProduct.price : "/"}</td>
        <td>{renderAvailability()}</td>
        <td>
          <select
            className="form-select"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <option></option>
            {renderSelect()}
          </select>
        </td>
      </tr>
    </React.Fragment>
  );
}

export default ProductSelect;
