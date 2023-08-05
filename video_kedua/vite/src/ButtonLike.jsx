import { useState } from "react";

export default function ButtonLike() {
    const [like, setLike] = useState(0);
  
    function PlusClick() {
      setLike(like + 1)
    }
  
    return (<button onClick={PlusClick} >like ({like})</button>)
}