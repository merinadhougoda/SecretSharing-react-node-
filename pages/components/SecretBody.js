import axios from "axios";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useState } from "react";
import { timeState } from "./atoms/secretAtoms";
import { passwordState } from "./atoms/passwordAtom";

export default function SecretMessage() {
  const router = useRouter();

  const [body, setBody] = useState();

  const [password, setPassword] = useRecoilState(passwordState);

  const [expiresIn, setExpiresIn] = useRecoilState(timeState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const secretData = { body, password, expiresIn };
    const { data } = await axios.post(
      "http://localhost:3100/secrets",
      secretData
    );
    router.push({ pathname: `/secrets/${data.id}` });
  };

  const handleSecretChange = (e) => {
    setBody(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTimeChange = (e) => {
    setExpiresIn(e.target.value);
  };

  return (
    <div className="container">
      <form
        method="POST"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3 row">
          <textarea
            className="form-control"
            value={body}
            rows={8}
            cols={15}
            placeholder="Enter your secret here...."
            onChange={handleSecretChange}
          />
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Passphrase: </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={password}
              placeholder="Enter your Passphrase here...."
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Lifetime</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              value={expiresIn}
              onChange={handleTimeChange}
            >
              <option value="5 minutes">5 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="30 minutes">30 minutes</option>
              <option value="1 hour">1 hour</option>
              <option value="3 hours">3 hour</option>
              <option value="1 day">1 day</option>
              <option value="7 days">7 days</option>
            </select>
          </div>
        </div>
        <button type="submit" className=" btn btn-primary secret-link-btn">
          Create Secret Link
        </button>
      </form>
    </div>
  );
}
