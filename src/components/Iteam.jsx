
import React from 'react';

function Iteam({ id, title, price, description, category, image, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td><img src={image} alt="" /></td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </>
  );
}

export default Iteam;


