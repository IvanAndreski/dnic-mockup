import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { parts } from "../mock_data/parts";
import ProductSelect from "./ProductSelect";

function Build() {
  const [products, setProducts] = useState([]);
  const [mobo, setMobo] = useState();
  const [cpu, setCpu] = useState();
  const [comp, setComp] = useState(true);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (products.length === 0) fetchProducts();

    if (cpu !== undefined && mobo !== undefined) {
      if (cpu !== mobo) {
        setComp(false);
        Swal.fire({
          icon: "error",
          title: "Incompatibility detected",
          text: "Your cpu and motherboard are not compatible",
        });
      } else if (cpu === mobo) {
        setComp(true);
      }
    }
  }, [cpu, mobo, products]);

  const fetchProducts = () => {
    setProducts(parts);
  };

  const countTotal = () => {
    let sum = 27890;
    Object.values(selected).forEach((s) => {
      sum += parseInt(s.price);
    });

    return sum;
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Availability</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          <ProductSelect
            type="cpu"
            products={products}
            setCpu={setCpu}
            comp={comp}
            setSelected={setSelected}
            selected={selected}
          />
          <ProductSelect
            type="motherboard"
            products={products}
            setMobo={setMobo}
            comp={comp}
            setSelected={setSelected}
            selected={selected}
          />
          <tr>
            <th scope="row">RAM:</th>
            <td>Kingston ddr4 8GB 2660MHz</td>
            <td>3000</td>
            <td>
              <img
                src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.18169-9/11044952_1098126943535468_5932810670573964325_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=2W5lE2zg0x0AX8qXJDY&_nc_ht=scontent-frx5-1.xx&oh=00_AT-YrgGgwCbIKEUFgX47MmsFd3X7Vq1dS67MOUm4CKH3pQ&oe=6287B3B3"
                alt=""
                height="40x"
              />
            </td>
            <td>
              <select className="form-select" style={{ width: "100%" }}>
                <option>Kingston ddr4 2660MHz</option>
              </select>
            </td>
          </tr>

          <tr>
            <th scope="row">Hard Drve:</th>
            <td>/</td>
            <td>/</td>
            <td></td>
            <td>
              <select className="form-select" style={{ width: "100%" }}>
                <option></option>
              </select>
            </td>
          </tr>

          <tr>
            <th scope="row">Solid State Drive:</th>
            <td>Samsung NVMe 980 250GB</td>
            <td>2800</td>
            <td>
              <img
                src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.18169-9/313473_297366056958445_1188811240_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=cDGb7-FYZ2kAX-zsSPb&_nc_ht=scontent-frt3-1.xx&oh=00_AT-s16SQYejcydi_4GVENeKxLUUEg0FZ6qLWgmngIMYqeQ&oe=62887EA7"
                height="40x"
                alt=""
              />
            </td>
            <td>
              <select className="form-select" style={{ width: "100%" }}>
                <option>Samsung NVMe 980 250GB</option>
              </select>
            </td>
          </tr>

          <tr>
            <th scope="row">Graphics Card:</th>
            <td>AMD RX 6500 XT 4GB</td>
            <td>17000</td>
            <td>
              <img
                src="https://ddcom.mk/wp-content/uploads/2022/04/ddstore_logo.png"
                height="40x"
                alt=""
              />
            </td>
            <td>
              <select className="form-select" style={{ width: "100%" }}>
                <option>AMD RX 6500 XT 4GB</option>
              </select>
            </td>
          </tr>

          <tr>
            <th scope="row">Power Supply:</th>
            <td>Deepcool DN550</td>
            <td>3000</td>
            <td>
              <img
                src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.18169-9/11044952_1098126943535468_5932810670573964325_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=2W5lE2zg0x0AX8qXJDY&_nc_ht=scontent-frx5-1.xx&oh=00_AT-YrgGgwCbIKEUFgX47MmsFd3X7Vq1dS67MOUm4CKH3pQ&oe=6287B3B3"
                height="40x"
                alt=""
              />
            </td>
            <td>
              <select className="form-select" style={{ width: "100%" }}>
                <option>Deepcool DN550</option>
              </select>
            </td>
          </tr>

          <tr>
            <th scope="row">PC Case:</th>
            <td>Matrix MX-11</td>
            <td>2090</td>
            <td>
              <img
                src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.18169-9/11044952_1098126943535468_5932810670573964325_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=2W5lE2zg0x0AX8qXJDY&_nc_ht=scontent-frx5-1.xx&oh=00_AT-YrgGgwCbIKEUFgX47MmsFd3X7Vq1dS67MOUm4CKH3pQ&oe=6287B3B3"
                height="40x"
                alt=""
              />
            </td>
            <td>
              <select className="form-select" style={{ width: "100%" }}>
                <option>Matrix MX-11</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={6} className="d-flex text-left">
              Total Price: {countTotal()}
            </td>
            <td colSpan={6}>
              Compatible:{" "}
              <b className={!comp ? "text-danger" : "text-success"}>
                {!comp ? "X" : "✓"}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Build;
