import { fetchListOfProducts } from "@/actions";

async function ServerActionsExample() {
  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1>Server actions example - server components</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => <li>{item.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ServerActionsExample;
