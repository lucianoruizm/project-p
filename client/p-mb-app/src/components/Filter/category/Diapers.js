// Puede aplicarse una vez creado el backend

import FilterBTN from "../FilterBTN";

const Diapers = ({ updateDiapers }) => {
    let diapers = ["Babysec", "Huggies", "Pampers", "Estrella"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne"
              > Pañales </button>
            </h2>
            <div
              id="collapseOne" className="accordion-collapse collapse show"
              aria-labelledby="headingOne" data-bs-parent="#accordionExample"
            >
              <div className="accordion-body d-flex flex-wrap gap-3">
                {diapers.map((item, index) => (
                  <FilterBTN
                    key={index}
                    index={index}
                    name="diapers"
                    task={updateDiapers}
                    //updatePageNumber={updatePageNumber}
                    input={item}
                  />
                ))}
              </div>
            </div>
        </div>
    )
}
export default Diapers;