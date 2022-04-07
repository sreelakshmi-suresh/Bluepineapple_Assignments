import React from "react";
import {Link} from "react-router-dom";

function Audi(){
    return(
        <div className="car">
            <h1>Audi R8</h1>
            <p>The Audi R8, based on the Audi Le Mans quattro concept car (designed by Frank Lamberty and Julian Hoenig) first appeared at the 2003 International Geneva Motor Show and the 2003 Frankfurt International Motor Show.</p><p> The R8 road car was officially launched at the Paris Auto Show on 30 September 2006. There was some confusion with the name, which the car shares with the 24 Hours of Le Mans winning R8 Le Mans Prototype (LMP). Initial models included the R8 4.2 FSI coupé (with a V8 engine) and R8 5.2 FSI coupé (with a V10 engine).</p><p> Convertible models, called the Spyder by the manufacturer, were introduced in 2008, followed by the high-performance GT model introduced in 2011. The Motorsport variants of the R8 were also subsequently introduced from 2008 onwards. An all-electric version called the e-Tron started development but would only reach production stage when the second generation model would be introduced.6-time 24 Hours of Le Mans winner Jacky Ickx described the R8 as "the best handling road car today".[7][8][9]The car received a facelift in 2012 and a new model called the V10 Plus was now added to the range. Production of the Type 42 ended in August 2015.[10][11][12]</p>
            <button className="card_btn"><Link to="/cars">Back</Link></button>
            
            </div>

    );
}

export default Audi;