export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

export async function getSingleProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

export async function getAllProductIds() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]'

  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const data = await response.json();
  //   console.log(data);

  //   return data.map((product) => {
  //     return {
  //       params: {
  //         id: product.id,
  //       },
  //     };
  //   });
  //   const products = await getProducts();
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return data.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
}
