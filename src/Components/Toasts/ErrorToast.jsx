import { Box, Button, useToast } from "@chakra-ui/react";

const ErrorToast = () => {
  const toast = useToast();
  toast({
    title: "Error",
    description: "Something went wrong",
    status: "error",
    duration: 5000,
    isClosable: true,
  });
};

export default ErrorToast;
