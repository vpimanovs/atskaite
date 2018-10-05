import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Offer = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Piedāvājuma ID: {props.offer.id}</h6>
            <p className="card-text">Piedavājuma cenu zonas ID: {props.offer.pricezoneid}</p>
            <p className="card-text">Piedavājuma promocijas ID: {props.offer.promotionid}</p>
            <p className="card-text">Piedavājuma produkta nosaukums: {props.offer.productid}</p>
            <p className="card-text">Piedavājuma produkta apraksts: {props.offer.desription}</p>
            <p className="card-text">Piedavājuma cenu zonas valsts: {props.offer.pricezoneByPricezoneid.country}</p>
            <p className="card-text">Piedavājuma cenu zonas valūta: {props.offer.pricezoneByPricezoneid.currency}</p>
            <p className="card-text">Piedavājuma kompanijas id: {props.offer.promotionByPromotionid.campaignid}</p>
            <p className="card-text">Piedavājuma promocijas promokods: {props.offer.promotionByPromotionid.promocode}</p>
            <p className="card-text">Piedavājuma promocijas apraksts: {props.offer.promotionByPromotionid.description}</p>
            <p className="card-text">Piedavājuma promocijas sākuma datums: {props.offer.promotionByPromotionid.startdate}</p>
            <p className="card-text">Piedavājuma promocijas beigu datums: {props.offer.promotionByPromotionid.enddate}</p>
            

        </div>
    </div>
);




export default Offer;