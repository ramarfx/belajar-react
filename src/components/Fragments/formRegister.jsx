import Button from "../Elements/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form action="" method="post">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
        name="confirmPassword"
      />

      <Button classname="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
