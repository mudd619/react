import "./styling.css"

export function Right(prop){
    return <div>
        <button className="btn" style={{backgroundColor : prop.color.one}}>SETTINGS</button>
        <button className="btn" style={{backgroundColor : prop.color.two}}>CONTACT US</button>
        <button className="btn" style={{backgroundColor : "purple"}}>HELP</button>
        <button className="btn" style={{backgroundColor : "brown"}}>DOWNLOAD</button>
    </div>
}