// Convierta la siguiente función, en una función asíncrona para retirnar la data
// usando async/await
// const getData = ({ url }) => {
//  fetch(url)
//  .then((response) => {
//  if (response.status !== 200) {
//  //genera una excepcion
//  throw new Error('Error al obtener los datos')
//  }
//  return response.json()
//  }).then((data) => {

//  return data
//  }).catch((error) => {
//  console.log(error)
//  })
// }

const getData = async ({ url }) => {
    try {
      const response = await fetch(url);
  
      if (response.status !== 200) {
        throw new Error('Error al obtener los datos');
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  (async () => {
    const data = await getData({ url: '' });
    console.log(data);
  })();
  