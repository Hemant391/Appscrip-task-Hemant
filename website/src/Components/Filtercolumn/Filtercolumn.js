import './Filtercolumn.css'



export default function Filtercolumn (){
    return(
        <div className="filtercontainer ">
            <div className="checkbox">
            <input type="checkbox" id="custom"   />
            <label htmlFor="Customizable"> CUSTOMIZBLE</label>
            </div>
            <hr />
            {filter('IDEAL FOR',"ALL")}
            {filter('OCCASION',"ALL")}
            {filter('WORK',"ALL")}
            {filter('FABRIC',"ALL")}
            {filter('SEGMENT',"ALL")}
            {filter('SUITABLE FOR',"ALL")}
            {filter('RAW MATERIALS',"ALL")}
            {filter('PATTERN',"ALL")}
            <hr />

        </div>
    )
}
function filter(namefilter,valuefilter){
    return(
     <div className="filterheading">
        <div style={{display:'flex',justifyContent:'space-between'}}>

        <b>{namefilter}  </b>
        <select name={namefilter} id={namefilter} style={{border:'0px'}}>
            <option value="all" ></option>
            <option value="something" >1</option>
        </select>
        </div>
        <p>{valuefilter}</p>
            <hr />
        </div>
    )
}