// // App.js
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Warehouses from './warehouse';
// import WarehouseDetails from './warehouseDetails';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Warehouses />} />
//         <Route path="/warehouses/:id" element={<WarehouseDetails />} />
//         <Route path="/warehouses/:id" element={<WarehouseDetails warehouses={Warehouses} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Warehouses from "./warehouse";
import WarehouseDetails from "./warehouseDetails";
// import warehousesData from './warehouse.json';

const App = () => {
  // const [warehouses, setWarehouses] = useState(warehousesData);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/warehouses/:id"
          element={<WarehouseDetails warehouses={warehouses} setWarehouses={setWarehouses} />}
        /> */}
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
