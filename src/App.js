
import {useRef, useState} from "react";
import {Buttons} from "./Buttons";
import {Pool} from "./Pool";

export default function App(){
    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const interval = useRef(null);

    const addWater=()=>{
        if(count === 10) return
        setIsDisabled(true)
        const date = Date.now()
        interval.current = setInterval(()=>{
            setCount(prev=>prev+1)
            if(Date.now()-date > (10-count)*1000) {
                clearInterval(interval.current)
                setIsDisabled(false)
            }
        }, 1000)
    }

    const removeWater =()=>{
        if (count === 0) return
        setIsDisabled(true)
        const date = Date.now()
        interval.current = setInterval(()=>{
            setCount(prev=>prev-1)
            if(Date.now()-date > count*1000) {
                clearInterval(interval.current)
                setIsDisabled(false)
            }


        }, 1000)
    }

    const pauseFunc =()=>{
        clearInterval(interval.current)
        interval.current=null;
        setIsDisabled(false)
    }






    return <div className={'App'}>
        {count}
        <Buttons addWater={addWater} removeWater={removeWater} pauseFunc={pauseFunc} isDisabled={isDisabled}/>
        <Pool  count={count} />
    </div>

}