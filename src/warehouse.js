// Warehouses.js
import React, { useState, useEffect } from 'react';
import warehouses from './warehouse.json';
import { Link } from 'react-router-dom';

const Warehouses = () => {
  const [warehousesList, setWarehousesList] = useState(warehouses);
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [clusterFilter, setClusterFilter] = useState('');
  const [spaceAvailableFilter, setSpaceAvailableFilter] = useState('');

  useEffect(() => {
    const filteredWarehouses = warehouses.filter((warehouse) => {
      return (
        warehouse.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (cityFilter === '' || warehouse.city === cityFilter) &&
        (clusterFilter === '' || warehouse.cluster === clusterFilter) &&
        (spaceAvailableFilter === '' || warehouse.space_available >= spaceAvailableFilter)
      );
    });
    setWarehousesList(filteredWarehouses);
  }, [searchQuery, cityFilter, clusterFilter, spaceAvailableFilter]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (e) => {
    switch (e.target.name) {
      case 'city':
        setCityFilter(e.target.value);
        break;
      case 'cluster':
        setClusterFilter(e.target.value);
        break;
      case 'spaceAvailable':
        setSpaceAvailableFilter(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Warehouses</h1>
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by warehouse name"
      />
      <div>
        <label>City:</label>
        <select name="city" value={cityFilter} onChange={handleFilter}>
          <option value="">All</option>
          {Array.from(new Set(warehouses.map((warehouse) => warehouse.city))).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Cluster:</label>
        <select name="cluster" value={clusterFilter} onChange={handleFilter}>
          <option value="">All</option>
          {Array.from(new Set(warehouses.map((warehouse) => warehouse.cluster))).map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Space Available:</label>
        <input
          type="number"
          value={spaceAvailableFilter}
          onChange={handleFilter}
          placeholder="Minimum space available"
        />
      </div>
      <ul>
        {warehousesList.map((warehouse) => (
          <li key={warehouse.id}>
            <Link to={`/warehouses/${warehouse.id}`}>{warehouse.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Warehouses;