/* import external modules */
import { Grid } from '@mui/material'
import { PropTypes } from 'prop-types'
import ProductCard from '../ProductCard'

/** @description This is a functional products list component
 *  @version 1.0.0
 *  @since 17/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name ProductsList
 *  @returns {Component} Returns the products list component
 **/

const ProductsList = ({ products }) => {
  const renderProductsList = products?.map((product, index) => {
    return (
      <Grid item xs={12} sm={6} key={index}>
        <ProductCard product={product} />
      </Grid>
    )
  })

  return <>{renderProductsList}</>
}

ProductsList.defaultProps = {
  products: [],
}

ProductsList.propTypes = {
  products: PropTypes.array,
}

export default ProductsList
