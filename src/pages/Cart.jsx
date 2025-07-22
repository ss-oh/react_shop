import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeAge, changeNum, nPlusNum, plusNum} from "../redux/store";
import {addCount, removeCount, removeItem} from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const num = useSelector((state) => state.num);
  const obj = useSelector((state) => state.obj);
  const dispatch = useDispatch(); // 변경함수를 쓸 수 있게 해줌

  console.log(cart);

  return (
    <>
      num : {num}
      <button
        onClick={() => {
          dispatch(changeNum());
        }}
      >
        변경버튼
      </button>
      <button
        onClick={() => {
          dispatch(plusNum());
        }}
      >
        1씩 증가버튼
      </button>
      <button
        onClick={() => {
          dispatch(nPlusNum(3));
        }}
      >
        n씩증가
      </button>
      <div>
        {obj.name} : {obj.age}
        <button
          onClick={() => {
            dispatch(changeAge(30));
          }}
        >
          나이변경
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.count}</td>

                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(i));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeCount(i));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(removeItem(i));
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
