import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import ProductDetails from './product-details/product-details';
import SearchResults from './search-results/search-results';

/* eslint-disable-next-line */
export interface ProductsProps { }

export const Products = (props: ProductsProps) => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={SearchResults} />
            <Route path={`${match.url}/:product`} component={ProductDetails} />
        </Switch>
    )
};

export default Products;
