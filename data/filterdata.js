export  function Filterdata (text,data) {
    let newData = data.filter(item => {
      const itemData = `${item.nombre.toUpperCase()}`;
      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemData.indexOf(textData) > -1;
    }
    });
    return newData
  };