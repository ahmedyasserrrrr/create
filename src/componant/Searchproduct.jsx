import { useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Searchproduct = ({setmode}) => {
    const theme=useTheme();
    return (
        <div>
            <Link onClick={ () => { setmode(theme.palette.mode === 'light' ? 'dark':'light'  ) }}  > 
      <i class="fas fa-moon"></i>
       </Link>
        </div>
    );
}

export default Searchproduct;
