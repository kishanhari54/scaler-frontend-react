import { useEffect, useState } from "react";

function getCategories() {
  return fetch("https://fakestoreapi.com/products/categories")
    .then((data) => data.json())
    .catch((err) => alert(err));
}
export default function Category() {
  let [category, setCategory] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((data) => {
        console.log(data);
        setCategory(data);
        setLoading(false);
      })
      .catch((err) => {
        return new Error(`Category API Failure`);
      });
     // setCategory(['electronics', 'jewelery', "men's clothing", "women's clothing"])
     // setLoading(false)
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <>
      <h1> Category</h1>
        <ul>
          {category.map((category) => {
           return  <li key={category}> {category}</li>;
          })}
        </ul>
      </>
    );
  }
}
