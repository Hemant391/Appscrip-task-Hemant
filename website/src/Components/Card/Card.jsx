import bag from '../../Asset/bag.png'


export default  function Card(img,name,outofstock,key){
    return (
        <div className="wrapper" id={key}>
            {outofstock?(
                <div className="stock">OUT OF STOCK</div>
            ):''}
             <img src={bag} alt="bagimg" />
             <h4>Hemant bag</h4>
        <p>Sign in or Create and account to see </p> 
        </div>
    )
}