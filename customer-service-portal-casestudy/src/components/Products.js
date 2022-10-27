import Rater from './Rater';
import '../css/rating.css'
import '../css/style.css'

function Products(props) {
    //console.log(props)
    const { pdtCode, pdtPrice, pdtName, pdtImg, pdtDescription, avgFeedback: rating} = props;
    return (
        <div className="thumbnail">
            <div className="row>">
                <div className="col-sm-6">
                    <img src={pdtImg} alt="product" style={{ "width": "100%" }} className="img img-rounded img-responsive" />
                </div>
                <div className="col-sm-6">
                    <div className={"caption"} >
                        <a href={`/productDetails/${pdtCode}`}><h3>{pdtName}</h3></a>
                        <h4><span style={{ "color": "red" }}>Rs.{pdtPrice}</span></h4>
                        {props.status ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{pdtDescription}</p>}
                        <Rater value={rating} maxlength="6" />&nbsp;&nbsp;
                        <span style={{ "fontSize": "9px" }}>{rating} /5 </span>
                    </div>
                    <br />
                </div>
            </div><br />
        </div>
    )
}
export default Products;
