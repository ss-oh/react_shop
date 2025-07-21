import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";

function Cart() {
  const test = useSelector((state) => {
    return state.test;
  });

  const item = useSelector((state) => state.item);

  console.log(test);
  console.log(item);

  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>apple</td>
          <td>10</td>
          <td>수정하기</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cart;
