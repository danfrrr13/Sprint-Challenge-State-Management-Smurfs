import React, { useEffect } from 'react';
import Smurf from '../Smurf/';

import { getSmurfs } from '../../store/actions/';

import { connect } from 'react-redux';

const Smurfs = ({ getSmurfs, smurfs, isFetching }) => {
    useEffect(() => {
        getSmurfs();
    },[getSmurfs])
    if (isFetching) {
        return <p>Fetching Smurf data...</p>
    } else {
        return (
            <div className='Smurfs'>
                {smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)}
            </div>
        );
    }
    
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    };
};

export default connect(
    mapStateToProps,
{
    getSmurfs
})(Smurfs);