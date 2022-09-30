// Esto pede utilizarse una vez creado el backend

// import Diapers from "./category/Diapers";
// import Fabrics from "./category/Fabrics";
// import Clothing from "./category/Clothing";

// const Filter = ({ 
//     updateDiapers, updateFabrics, updateClothing,
// }) => {

//     let clear = () => {
//         updateDiapers("");
//         updateFabrics("");
//         updateClothing("");
//         window.location.reload(false);
//     }

//     return (
//         <div className="col-lg-3 col-12 mb-5">
//           <div className="text-center fw-bold fs-4 mb-2">Filters</div>
//           <div
//             style={{ cursor: "pointer" }} onClick={clear}
//             className="text-primary text-decoration-underline text-center mb-3"
//           > Clear Filters </div>
//           <div className="accordion" id="accordionExample">
//             <Diapers
//               //updatePageNumber={updatePageNumber}
//               updateDiapers={updateDiapers}
//             />
//           </div>
//         </div>
//     )
// }

// export default Filter;