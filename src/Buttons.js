

export function Buttons({addWater, removeWater, pauseFunc, isDisabled,}){

    return <div className={'Buttons'}>
        <button disabled={isDisabled} onClick={addWater}>Add Water</button>
        <button disabled={isDisabled} onClick={removeWater}>Remove Water</button>
        <button disabled={!isDisabled} onClick={pauseFunc}>Pause</button>
    </div>

}