import Card from "../components/Card";
import bg from "../bg.jpg";
import {useState} from "react";

function MainPage({fruit}) {
  const [fruitCount, setFruitCount] = useState(3);

  const visibleFruit = fruit.slice(0, fruitCount);
  console.log("보여줄과일갯수");
  console.log(visibleFruit);
  return (
    <>
      <div
        className="MainPage main-bg b"
        style={{backgroundImage: "url(" + bg + ")", height: "300px"}}
      ></div>

      <div className="container b">
        <div className="row" style={{paddingTop: "20px", textAlign: "center"}}>
          {visibleFruit.map((data, i) => {
            return <Card data={data} key={i} />;
          })}
        </div>
      </div>
      {fruitCount > fruit.length ? (
        <div className="alert alert-danger">더이상 상품이 없습니다.</div>
      ) : (
        <button
          onClick={() => {
            setFruitCount(fruitCount + 3);
          }}
        >
          3개 더보기
        </button>
      )}
    </>
  );
}

export default MainPage;
