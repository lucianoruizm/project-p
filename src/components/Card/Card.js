import styles from "./Card.module.scss";

const Card = ({ results }) => {
    let display;

    if (results) {
        display = results.map((x) => {
            let { id, name, price, size, img, description} = x;

            return (
                <div 
                  key={id}
                  className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                  <div className={`${styles.card} d-flex flex-column justify-content-center`}
                  >
                      <img className={`${styles.img} img-fluid`} src={img} alt="" />
                      <div className={`${styles.content}`}>
                          <div className="fs-5 fw-bold mb-4">{name}</div>
                          <div className="">
                              <div className="fs-5">Precio: {price}</div>
                              <div className="fs-5">Tamaño: {size}</div>
                              <div className="fs-5">Descripción: {description}</div>
                          </div>
                      </div>
                  </div>
                </div>
            );
        });
    }else {
        display = "No products Found :/";
    }
    
    return <>{display}</>
}

export default Card;