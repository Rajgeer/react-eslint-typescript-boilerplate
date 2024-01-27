import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import MyFormComponent from "../components/Form";
import { useAppSelector, useAppDispatch } from "../hooks/useHooks";
import { increment, decrement } from "../redux/reducer";
import { addUser } from "../redux/user/userSlice";
export default function Home() {
  const count = useAppSelector((state) => state?.counter?.value);
  const user = useAppSelector((state) => state?.user);
  const dispatch = useAppDispatch();
  // const base = 2;
  // const exponent = 3;
  // const result = base ** exponent;
  console.log({ user });
  const obj = {
    id: "34147",
    fullname: "Josep martin",
    email: "josepmartin@gmail.com",
    token: "shdaghsjfuferui eq rufnasfsAHF FSHFaifI",
  };
  return (
    <div className="container">
      {/* <div className="register-form">My Course Here</div> */}
      {/* <MyFormComponent /> */}
      <p>{count}</p>
      <button type="button" onClick={() => dispatch(addUser(obj))}>
        Add User
      </button>
      <button className="inc-btn" onClick={() => dispatch(increment())}>
        {" "}
        increment{" "}
      </button>
      <button className="dec-btn" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
