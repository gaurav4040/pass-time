function Random(){
    let r_number = Math.random()*10;
    return <h1 style={{'background-color':'#677002'}}>
        Random number is : {Math.round(r_number)} 
    </h1>
}
export default Random;