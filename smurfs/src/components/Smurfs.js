import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

function Smurfs(props) {
  useEffect(props.getSmurfs,[])
  
  if(props.fetching) {
  return <p>Fetching Data...</p>
  }
  return (
    props.smurfs.map((smurf) => {
        return (
          <div key={smurf.id}>
          <h3>{smurf.name}</h3>
          <p>age: {smurf.age}</p>
          <p>height: {smurf.height}</p>
          </div>
        )
      })
    
  )
}
function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
  }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs)