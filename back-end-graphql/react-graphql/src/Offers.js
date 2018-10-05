import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Offer from './Offer';

const Offers = () => (
    <Query query={gql`
        {
            allOffers{
                nodes{
                  id
                  pricezoneid
                  promotionid
                  productid
                  desription
                  pricezoneByPricezoneid{
                   country
                    currency
                    id
                  }
                  promotionByPromotionid{
                    campaignid
                    entrypointid
                    promocode
                    description
                    startdate
                    enddate
                  }
                }
              }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
            
            console.log(data)
            return data.allOffers.nodes.map((currentOffer) => (
                <Offer offer={currentOffer} />
            ));
        }}
    </Query>
);

export default Offers;