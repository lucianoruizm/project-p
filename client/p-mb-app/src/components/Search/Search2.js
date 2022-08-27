import { useState } from "react";

const Search2 = ({onSearch}) => {

    const [value, setValue] = useState('')
    
       function handleChange(e) {
           setValue(e.target.value);
           onSearch(e);
       }

       return (
        <input  
          placeholder="Search..." 
          type='text' 
          onChange={handleChange} 
          value={value} 
        />
    )
}

export default Search2;