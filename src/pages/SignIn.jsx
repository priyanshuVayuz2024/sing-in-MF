import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: "abcd@gmail.com",
        password: "123456",
      })
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
    >
      <h1>Sign In</h1>
      {/* Email */}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "Email is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 400 }}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      {/* Password */}
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "Password is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 400 }}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />

      {/* Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ maxWidth: 400 }}
      >
        Sign In
      </Button>
    </Box>
  );
}

export default SignIn;
