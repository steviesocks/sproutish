import React from 'react';
import LogoWhite from '../../assets/img/sproutish-logo-white.png';
import LogoBlack from '../../assets/img/sproutish-logo-black.png';

const Logo = ({ LogoIsBlack, brand, height }) => {
   const LogoVersion = LogoIsBlack ? LogoBlack : LogoWhite; 
   return(
           <img height={height} src={LogoVersion} alt={brand} />

   )
    
}

export default Logo;