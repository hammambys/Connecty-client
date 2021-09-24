import React, {useState} from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useForm } from "../util/hooks";

 function Forgotpwd() {
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(FindpwdCallback, {
    email: "",
    
  });

  const [Findpwd, { loading }] = useMutation(FIND_PASSWORD, {
    update(_, { data: { login: userData } }) {

    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function FindpwdCallback() {
    Findpwd();
  }

  return (
    <div className="form-container">
    <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
      <h1 style={{ textAlign: "center" }}>Find your password</h1>
      <p>Enter your email</p>
      <Form.Input
          
          placeholder="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email ? true : false}
          onChange={onChange}
        />
      
      
      <Button as={Link} to="/" type="submit" floated="right"  color="brown">
        Next
      </Button>
      <Button as={Link} to="/" type="submit" basic floated="right"  color="brown">
        Cancel
      </Button>
    </Form>
    {Object.keys(errors).length > 0 && (
      <div className="ui error message">
        <ul className="list">
          {Object.values(errors).map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
  );
  
}

const FIND_PASSWORD = gql`
  mutation findpwd($email: String!) {
    findpwd(email: $email) {
      id
      password
    }
  }
`;

export default Forgotpwd;
