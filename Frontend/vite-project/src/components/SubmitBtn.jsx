export function SubmitBtn({ data ,selectedOption ,  setTotalCorrect ,setCount}){

    function handleOnclick(){
        const correctAnswer = data.correct_answer;

        if(selectedOption==null){
            alert("You need to select at least one Option")
        }
        else{
        if(selectedOption==correctAnswer){
            console.log("you choose the correct answer")
            setTotalCorrect(c => c + 1)

        }
        setCount(c => c + 1)
    }
    }

    return <div style={{width:"100%",display:"flex",justifyContent:"center" ,}}>
        <button style={{padding:"5px",borderRadius:"10px",backgroundColor:"#6b94c6"}} onClick={handleOnclick}>Submit</button>
        
    </div>
}