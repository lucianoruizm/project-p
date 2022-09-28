
const FilterBTN = ({ input, task, index, name }) => {
    return (
        <div>
            <div className="form-check">
              <input
                className="form-check-input x" type="radio"
                name={name} id={`${name}-${index}`}
              />
              <label
                onClick={(x) => {
                   task(input); //updatePageNumber(1); Esto iria cuando se agregue el paginado
                }}
                className="buttton button-primary"
                for={`${name}-${index}`}
              > {input} </label>
            </div>
        </div>
    )
}

export default FilterBTN;