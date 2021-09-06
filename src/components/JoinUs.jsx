import "./styling.css"

export function Left(props){
    return <div>
        <button className = "btn" style = {{backgroundColor : props.color}}>JOIN US</button>
        <button className = "btn" style = {{backgroundColor : "orange"}}>LOGIN</button>
        <button className = "btn" style = {{backgroundColor : "green"}}>SEARCH</button>
        <button className = "btn" style = {{backgroundColor : "pink"}}>HOME</button>
    </div>
}