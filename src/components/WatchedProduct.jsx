import "./WatchedProduct.css";
import bg from "../bg.jpg";
import {useSelector} from "react-redux";

function WatchedProduct({fruit}) {
  const watched = useSelector((state) => state.watched);

  return (
    <div className="WatchedProduct">
      <div className="cards">
        <p>최근 본 상품</p>
        {watched.map((data, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${data.title}.jpg`}
                alt=""
              />
              <p>상품명</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchedProduct;
