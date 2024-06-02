import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, useToast } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

const Index = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleProtectPdf = () => {
    if (!pdfFile || !password) {
      toast({
        title: "Error",
        description: "Please upload a PDF file and enter a password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Placeholder for actual PDF protection logic
    toast({
      title: "Success",
      description: "PDF file has been password protected (simulated).",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Password Protect Your PDF</Text>
        <Input type="file" accept="application/pdf" onChange={handleFileChange} />
        <Input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
        <Button leftIcon={<FaLock />} colorScheme="teal" onClick={handleProtectPdf}>
          Protect PDF
        </Button>
        {pdfFile && (
          <Box mt={4} p={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>File: {pdfFile.name}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
