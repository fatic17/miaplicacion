import React from  "react";
import "./footer.css"
import fb from "../assets/facebook.png"
import insta from "../assets/instagram.png"

const Footer=()=>{
    return(
        <div className="footer">
        <div className="sb__footer section__padding">
        <div className="sb__footer-links">
        

    {/* ESTE ES EL PRIMER DIV "FRO BUSSIONESS"  */}
            <div className="sb__footer-links_div">
            <h4>Información de contacto</h4>
            <a href="/employer">
                <p>Dirección: </p> 
                </a>
            
            <a href="/healthplan">
            <p>Teléfono:</p> 
                </a>
        
            <a href="/individual">
            <p>Correo electrónico:</p> 
                </a>   
        </div>

        {/* ESTE ES EL SEGUNDO DIV "RESOURCES"  */}
        <div className="sb__footer-links_div">
            <h4> Enlaces importantes</h4>
            <a href="/resource">
                <p>Evento</p>
            </a>
            <a href="/resource">
                <p>Contacto</p>
            </a>
        </div>

        {/* ESTE ES EL TERCER DIV "PARTNERS BUSSIONESS"  */}
        <div className="sb__footer-links_div">
            <h4>Políticas y avisos legales</h4>
        <a href="/employer">
                <p>Términos y condiciones</p>
            </a>
        </div>
        {/* ESTE ES EL TERCER DIV COMPANY  */}
        <div className="sb__footer-links_div">
            <h4>Créditos</h4>
            <a href="/about">
                <p>Iconos por</p>
            </a>
            <a href="/press">
                <p>Imágenes por</p>
            </a>
        </div> 
         {/* ESTE ES EL cuarto DIV COMPANY  */}
          <div className="sb__footer-links_div"> 
            <h4>Coming soon on</h4> 
            <div className="socialmedia"> 
            <p ><img src={fb} alt=""/></p>
            <p><img src={insta} alt=""/></p> 
            </div> 
        </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
            <div className="sb__footer-copygriht"></div>
            <p>
                @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
        </div>
        <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terms & conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie declaration</p></div></a>
        </div>
        </div>
        </div>
    )
}
export default Footer;