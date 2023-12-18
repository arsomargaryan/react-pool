
import {Water} from "./Water";

export function Pool({count}){

    return <div className={'Pool'}>
        {
            Array(count).fill().map((el, index)=><Water key={index}/>)
        }
    </div>
}