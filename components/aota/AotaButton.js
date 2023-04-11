export const AotaButton = (props) => {
    return(
        <button className={`border-solid border-2 px-7 py-2 w-[90vw] lg:w-[200px] rounded-3xl border-[#691C64]`} style={{backgroundColor: props.type === "bg" ? "#691C64" : "transparent", color:  props.type === "bg" ? "#e5e5e5" : "#691C64"}}>
            {props.label}
        </button>
    )
}