import "./multiplication_table.css";
import Calculate from "./calculate";

function MultiplicationTable() {
  return (
    <div className="wrapper">
      <h1>구구단을 외자</h1>
      <h2>몇단을 알려드릴까요?</h2>
      <Calculate></Calculate>
    </div>
  );
}

export default MultiplicationTable;
