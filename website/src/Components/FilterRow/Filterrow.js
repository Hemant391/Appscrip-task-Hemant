import './Filterrow.css'

export default function Filterline({ click, status }) {
    return (
        <div className='Filterrow' >
            <div className="statusfilter" >
                <h4>3425 ITEMS  </h4>
                <h4 id="status" onClick={() => click()}>{status === true ? 'HIDE FILTER' : 'SHOW FILTER'} </h4>
            </div>
            <div className="responsive">
                <h4>FILTER </h4>
            </div>
            <div className="dropdown">
                <select name="filtername">
                    <option value="Recommended"  >RECOMMENDED</option>
                    <option value="Newest First" >NEWEST FIRST</option>
                    <option value="Popular" >POPULAR</option>
                    <option value="Hightolow" >PRICE:HIGH TO LOW</option>
                    <option value="Lowtohigh" >PRICE:LOW TO HIGH</option>
                </select>
            </div>
        </div>
    )
}