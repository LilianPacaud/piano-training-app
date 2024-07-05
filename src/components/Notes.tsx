import { Button, ButtonGroup } from "react-bootstrap"
import { getRandomInt } from "../utils/utils";
import React from "react";


interface NoteProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    countResult: number;
    setCountResult: React.Dispatch<React.SetStateAction<number>>
  }

const checkResult = (element: number, count: number, setCount: React.Dispatch<React.SetStateAction<number>>, countResult: number , setCountResult: React.Dispatch<React.SetStateAction<number>>) => {
    if(count === element){
      setCount(getRandomInt(6))
      setCountResult(countResult+ 1)
    }
    else{
        setCountResult(0)
    }
  }

const Notes: React.FC<NoteProps> = ({count, setCount, countResult, setCountResult}) => {
    return(
        <div>
            <ButtonGroup size="lg" className='noteButtons'>
                <Button variant="primary" onClick={() => checkResult(3, count, setCount,countResult, setCountResult)}>do</Button>
                <Button variant="primary" onClick={() => checkResult(2, count, setCount,countResult, setCountResult)}>re</Button>
                <Button variant="primary" onClick={() => checkResult(1, count, setCount,countResult, setCountResult)}>mi</Button>
                <Button variant="primary" onClick={() => checkResult(0, count,setCount,countResult, setCountResult)}>fa</Button>
                <Button variant="primary" onClick={() => checkResult(6, count,setCount,countResult, setCountResult)}>sol</Button>
                <Button variant="primary" onClick={() => checkResult(5, count,setCount,countResult, setCountResult)}>la</Button>
                <Button variant="primary" onClick={() => checkResult(4, count,setCount,countResult, setCountResult)}>si</Button>
            </ButtonGroup>
            <div className="streak">Série: <span  style={{color: countResult === 0 ? "red" : "green"}}>{countResult}</span></div>
        </div>
    )
}

export default Notes