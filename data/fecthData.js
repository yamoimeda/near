import React, { useState, useEffect,useCallback }from 'react';

export async function getUsuarios(pagina){
const nueva =
     fetch(`https://randomuser.me/api/?page=${pagina}&results=10&seed=abc`)
      .then(response => response.json())
      .then((responseData)=> {
        const data = responseData.results.map(({ name, email,picture }) => ({
          nombre: name.title+" "+name.first+" "+ name.last,
          correo: email,
          foto:picture.medium
        }));
        return data
        
      })
      .catch(error=>console.log(error)) 

      return nueva;
  };
