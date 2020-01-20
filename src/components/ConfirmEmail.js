
import { confirmEmailPasswordUser } from "./../stitch/authentication";
import { toast } from "react-toastify";
import { useHistory } from "react-router";


export default () => {
  const history = useHistory();

  const onSuccess = () => {
    const message = "Successfully confirmed your account! You can now log in.";
    toast(message, { type: toast.TYPE.SUCCESS });
    console.log('jaaaaaa succes, log maar in dan!')
    history.push("/");
  };
  const onFailure = err => {
    const message = `Failed to confirm your account - ${err.message}`;
    toast(message, { type: toast.TYPE.ERROR });
    console.log(message)
    history.push("/");
  };

  confirmEmailPasswordUser()
    .then(onSuccess)
    .catch(onFailure);
  return "Confirming Your Email/Password Account";
}