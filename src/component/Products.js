import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../services/actions/productActions'
 

export default function Products() {
    let {products, isLoading, error} = useSelector((state) => state)

    let dispatch = useDispatch()
  useEffect(() => {
     dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div>
        <h2>Products</h2>
         {
            isLoading && <h1>Loading...</h1>
         }
        {
            error && <h1>{error}</h1>
        }
        {
            products && products.map(product => {
                let { title, id} = product
                return <article key={id}>
                    <p>{title}</p>
                </article>
            })
         }
    </div>
  )
}
