import React, { useState } from 'react'
import { Divider, Input } from 'antd';

function SearchBar( {filterFood} ) {

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
    filterFood(event.target.value);
  }

  return (
    <div>
        <Divider>Search</Divider>

        <Input type='text' value={searchQuery} onChange={handleSearchQuery} />

    </div>
  );
}

export default SearchBar