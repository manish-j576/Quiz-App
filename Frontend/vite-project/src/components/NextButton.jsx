

export function NextButton({setCount}){
    
     const onClickHandler = () =>{
        setCount(c => c + 1)
     }
    return <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"5px"}}>
        <button style={{padding:"5px", paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",backgroundColor:"#6b94c6"}} onClick={onClickHandler}>Next</button>
    </div>
}