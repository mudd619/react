import "./page.css"

function Display(add){
    const arr = add.list
    return (<div className="div">
        {arr.map((el)=>{
            return <div className="grid2"  key={el.id}>
                <img className="name isize" alt="error" src={`${el.image}`}/>
                <div>
                    <div className="name">{el.name}</div>
                    <div className="category">{el.categories}</div>
                    <div className="category">Cost {'\u20B9'}{el.costOne} for one</div>
                    <div className="category pay">Min {'\u20B9'}{Math.floor(el.costOne/2)}. Upto 30 min</div>
                    <div className="category pay">Accepts : {el.payment.Cash ? "Cash," : ""} {el.payment.Card ? "Card," : ""} {el.payment.Online ? "Online" : ""} payments</div>
                </div>
                <div>
                    <div className="back">{el.rating}</div>
                    <div className="category small">{el.votes} votes</div>
                    <div className="category small top">{el.reviews} reviews</div>
                </div>
            </div>
        })}
    </div>)
}

export {Display}