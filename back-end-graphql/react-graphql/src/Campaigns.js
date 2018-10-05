import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Campaign from './Campaign';

const Campaigns = () => (
    <Query query={gql`
        {
            allCampaigns {
                nodes{
                id
                description
                trackingcode
                }
            }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
            
            console.log(data)
            return data.allCampaigns.nodes.map((currentCampaign) => (
                <Campaign campaign={currentCampaign} />
            ));
        }}
    </Query>
);

export default Campaigns;