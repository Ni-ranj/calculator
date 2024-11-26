const shownumber=(number)=>{
    output.value+=number 

}
const removeall=()=>{
    output.value=""
    output.placeholder="0"
}
const remove1=()=>{
    output.value=output.value.slice(0,-1)
}

const showresult=()=>{
    try{
        output.value=eval(output.value)
    }
    catch(err){
        console.log("inside catch block");

        console.log(err);
        output.placeholder="invalid expression"
        output.value=""
        
    }
    finally{
        console.log("inside finally block");
        
    }
}

