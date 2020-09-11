import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

const initialData = {
  name: '',
  age: '',
  height: '',
}

function AddSmurf(props) {
  const [form, setForm] = useState(initialData);
  
  const updateForm = (e) => {
    console.log(e.target);
    const {name, value} = e.target;
    setForm({...form, [name]: value})  
  }
  const submit = (e) => {
    e.preventDefault()
    console.log(form);
    props.postSmurf(form);
    setForm(initialData);
  }
  
  
  return (
          <div>
            <h2>Add a smurf!</h2>
            <form>
              <label>Name:&nbsp;
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={(e) => updateForm(e)}
                />
              </label>
              <label>Age:&nbsp;
                <input
                  type='number'
                  name='age'
                  value={form.age}
                  onChange={(e) => updateForm(e)}
                />
              </label>
              <label>Height:&nbsp;
                <input
                  type='text'
                  name='height'
                  value={form.height}
                  onChange={(e) => updateForm(e)}
                />
              </label>
              <button onClick={(e) => submit(e)} >Submit</button>
            </form>
          </div>
        )
 
}
function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {postSmurf})(AddSmurf)