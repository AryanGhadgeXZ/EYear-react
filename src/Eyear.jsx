import{useState,useRef} from "react";
function Eyear(){
    const[name,setName] = useState("");
    const[year,setYear] = useState("");
    const[msg,setMsg] = useState("");

    const hName = (event) => {setName(event.target.value);}
    const hYear = (event) => {setYear(event.target.value);}

    const show = (event) => {
        event.preventDefault();
        let ans = "name = " + name + "Year = " + year;
        setMsg(ans) ;
    }
    return(
        <>
        <center>
            <div class="div">
            <h1>Eyear App</h1>
            <form onSubmit={show}>
                <input type="text" placeholder="Enter Name" onChange={hName}/>
                <br/><br/>
                <label for="y">Select Year</label>
                <select id="y" onChange={hYear}>
                    <option value="FE">FE</option>
                    <option value="SE">SE</option>
                    <option value="TE">TE</option>
                    <option value="BE">BE</option>
                </select>
                <br/><br/>
                <input type="submit" class="btn"/>
            </form>
            <h2>{msg}</h2>
            </div>
        </center>
        </>
    );
}
export {Eyear};