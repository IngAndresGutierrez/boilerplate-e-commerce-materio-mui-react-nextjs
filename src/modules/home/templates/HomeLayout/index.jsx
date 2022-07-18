/* import external modules */
import { Grid } from '@mui/material'

/* import internal modules */
import ProductCard from '../../../../commons/components/ProductCard'

/** @description This is a functional home layout component
 *  @version 1.0.0
 *  @since 15/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name HomeLayout
 *  @returns {Component} Returns the home layout component
 **/

const HomeLayout = () => {
  return (
    <Grid item xs={12} sm={6}>
      <ProductCard />
    </Grid>
  )
}

export default HomeLayout
