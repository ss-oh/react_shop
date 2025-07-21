import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail({fruit}) {
  const {id} = useParams();
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [alert, setAlert] = useState(true);

  const selectedFruit = fruit[id];

  // useEffect는 html이(화면이) 전부 다 렌더링이 완료 된 후 실행이 된다.
  useEffect(() => {
    // 여기에 작성된 모든 코드들은 마운트, 업데이트될 때 실행
    let timer = setTimeout(() => {
      console.log("종료");
      setAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      console.log("clean-up-fn");
    };
  }, []); // 의존성 배열에 빈배열을 넣으면 마운트 시 한번만 실행이 됨
  // []<--의존성 배열 - 변경 감지된 state, props설정하는거에 따라
  //                  실행 여부가 결정됨

  // 의존성 배열이 없으면 마운트, 업데이트마다 실행이 됨
  // 의존성 배열이 빈 배열이면 마운트 시 한번만 실행이 됨
  // 의존성 배열에 특정 state,props가 있으면 마운트 될때와 해당 state,props가 업데이트 될 때 실행이 된다.
  useEffect(() => {
    console.log("useEffet확인용 콘솔");
  }, [num]);

  if (!selectedFruit) {
    return <div>해당 상품이 없습니다.</div>;
  }

  return (
    <div className="container mt-3">
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        버튼
      </button>
      {num}
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        버튼
      </button>
      {num2}
      {alert ? (
        <div className="alert alert-danger">5초안에 구매하면 공짜</div>
      ) : (
        ""
      )}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${fruit[id].title}.jpg`}
            alt=""
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4>{fruit[id].title}</h4>
          <p>{fruit[id].content}</p>
          <p>{fruit[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
