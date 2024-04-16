"use client";

import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
  const [formBody, setFormBody] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirm } = formBody;
    if (email === "" || password === "" || confirm === "" || !formBody) {
      toast.error("Make sure all fields are filled");
    } else {
      if (password === confirm) {
        axios
          .post("http://localhost:8000/register", formBody)
          .then((res) => {
            console.log(res);
            toast.success(res.data.message);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(formBody);
      } else {
        toast.error("Password doesnt match");
      }
    }
  };

  return (
    <section className="flex justify-center items-center flex-col">
      <h1 className="mt-[100px] p-7 text-[30px]">Register your Account</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handelSubmit}>
        <div>
          <div className="mb-2 block ">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            shadow
            onChange={(e) => {
              setFormBody({ ...formBody, email: e.target.value });
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            shadow
            onChange={(e) => {
              setFormBody({ ...formBody, password: e.target.value });
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            shadow
            onChange={(e) => {
              setFormBody({ ...formBody, confirm: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </section>
  );
}
