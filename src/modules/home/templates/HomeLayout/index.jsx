/* import external modules */

/* import internal modules */
import ProductsList from '../../../../commons/components/products/ProductsList'

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
  return <ProductsList products={[1, 2, 3, 4, 5]} />
}

export default HomeLayout
