import React, { useState } from 'react';

const WarehouseDetails = ({ warehouse, warehouses, setWarehouses }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState(warehouse);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedWarehouses = warehouses.map((warehouse) => {
      if (warehouse.id === editedWarehouse.id) {
        return editedWarehouse;
      }
      return warehouse;
    });
    setWarehouses(updatedWarehouses);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedWarehouse(warehouse);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({ ...editedWarehouse, [name]: value });
  };

  if (isEditing) {
    return (
      <div>
        <h2>Edit Warehouse</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedWarehouse.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={editedWarehouse.address}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Warehouse Details</h2>
      <p>Name: {warehouse.name}</p>
      <p>Address: {warehouse.address}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default WarehouseDetails;