// Puede aplicarse una vez creado el backend ???
const Search = ({ setSearch }) => {
    
    return (
        <form>
          <input 
            onChange={(e) => {
                setSearch(e.target.value);
            }}
            placeholder="Search..." 
            type='text'
           />
        </form>
    )
}

export default Search;