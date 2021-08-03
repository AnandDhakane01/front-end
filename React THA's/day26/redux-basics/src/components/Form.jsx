import { updateName, updateEmail } from "../actions";
import { useSelector, useDispatch } from 'react-redux'


function Form() {

  const name = useSelector(state => state.form.name);
  const email = useSelector(state => state.form.email);
  const dispatch = useDispatch();

  console.log(name, email)
  
  return (
    <>
    <div className="form">
      <label>
      <input type="text" placeholder="name" value={name} onChange={(e) => dispatch(updateName(e.target.value))}/>
      </label>
      <label>
      <input type="text" placeholder="email"value={email} onChange={(e) => dispatch(updateEmail(e.target.value))}/>
      </label>
    </div>
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
    </>
  );
}

export default Form
