import React from "react";
interface BaseApi {
  url:string;
  response:{
    data:{[key:string]:any};
    message:string;
    success:boolean;
  }
}

export const App = () => {
  console.log("Hello world");
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  } ,[]);
  return (
    <h6 className="text-3xl text-center font-bold underline">Hello world!</h6>
  );
};
