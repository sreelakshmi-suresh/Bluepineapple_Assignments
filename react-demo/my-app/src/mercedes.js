import React from "react";
import {Link} from "react-router-dom";
import "./card.css"
function Mercedes(){
    return(
        <div className="car">
            <h1>Mercedes S-class</h1>
            <p>The S-Class is the designation for top-of-the-line Mercedes-Benz models and was officially introduced in 1972 with the W116, and has remained in use ever since.</p>
            <p> The S-Class is the flagship vehicle for Mercedes-Benz. The S-Class has debuted many of the company's latest innovations, including drivetrain technologies, interior features, and safety systems (such as the first seatbelt pretensioners).[1] The S-Class has ranked as the world's best-selling luxury sedan.[2] In automotive terms, Sonderklasse refers to "a specially outfitted car." Although used colloquially for decades,[citation needed] following its official application in 1972, six generations of officially named S-Klasse sedans have been produced.
            </p><p>In 1981, the two-door, four-seat S-Class, designated as SEC, was introduced, sharing the petrol V8 engines with its four-door version, W126. After the introduction of a new nomenclature scheme, SEC was simply renamed as S-Class Coupé. For 1996 model year, the coupé was separated from S-Class line and named as new CL-Class (in line with other two-door models: CLK, SL, and SLK); however, the CL-Class was reintegrated into S-Class model line (same with CLK becoming E-Class Coupé and Cabriolet). The first-ever S-Class convertible since 1972, internally named A217, was introduced and became the one-generation model only. After the end of W222 production in 2020, the successors to the C217 coupé and A217 convertible are not planned, citing the low demand for those models and stronger demand for SUV models.</p>
            
            <button className="card_btn"><Link to="/cars">Back</Link></button>
        
        </div>
        
    );
}

export default Mercedes;