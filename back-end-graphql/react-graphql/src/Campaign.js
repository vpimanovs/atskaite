import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Campaign = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.campaign.description}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Kompānijas ID: {props.campaign.id}</h6>
            <p className="card-text">Kompānijas tracking code: {props.campaign.trackingcode}</p>
        </div>
    </div>
);




export default Campaign;