import React, { useState, useEffect,useCallback }from 'react';
import {getUsuarios} from './data/fecthData';
import {Filterdata} from './data/filterdata';

export function usarUsuarios() {

    const [pag, setPagina] = React.useState(1);
    const [data, setdata] = React.useState([]);
    const [buscar, setbuscar] = useState(true);
    const fetchMas = useCallback(() => setbuscar(true), []);

  
    useEffect(
      () => {
        
        if (!buscar) {
            return;
          }
          
          const fetch = async () => {
            const nuevadata = await getUsuarios(pag);
            
            setbuscar(false);
            setdata(viejadata => [...viejadata, ...nuevadata]);
            setPagina(pag + 1);
          };
      
          fetch();
      },
      // prevent fetching for other state changes
      [pag, buscar],
    );
    
    return [data, fetchMas];
  }