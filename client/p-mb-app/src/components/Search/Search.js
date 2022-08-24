import { useState } from "react"

const Search = ({setSearch}) => {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
        setSearch(e);
    }

    return (
        <form>
          <input placeholder="Search..." type='text' onChange={handleChange} value={value} />
        </form>
    )
}

export default Search;