import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../reducers/actions';

const Quotes = ({ getQuote, quote, isFetching, error }) => {
    if (isFetching) {
        return <h2>Fetching a quote now</h2>
    }
    return (
        <div>
            <h2>Quote: {quote}</h2>
            <button onClick={getQuote}>Get new quotes</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, 
    { getQuote }
    )(Quotes);