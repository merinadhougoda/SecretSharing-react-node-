import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SecretMessage() {

  const router = useRouter();
  const { id } = router.query;
  const [password, setPassword] = useState();
  const [secretPassphrase, setSecretPassphrase] = useState();
  
  const handleSubmit = async (e, password) => {
    const SecretInfo = await axios.post(
      `http://localhost:3100/private/${id}`,
      { password: '' }
    );
    setSecretPassphrase(SecretInfo.data)
  }
  return (
    <>np
      <div className="container">
        <h3 className="mt-5">Click to Continue</h3>
        <button type="submit" className="btn btn-primary secret-link-btn mb-5 mt-3" onClick={handleSubmit} value={password}>
          View Secret
        </button>
        <div className="passphrase">
          <p>{secretPassphrase}</p>
        </div>
      </div>
    </>
  );
}
