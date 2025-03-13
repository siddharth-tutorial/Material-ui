import React from 'react'

function ProductItems({product}) {
  return (
    <div>
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  )
}

export default ProductItems
