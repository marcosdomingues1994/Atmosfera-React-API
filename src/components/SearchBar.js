import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city, neighborhood);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Bairro (opcional)"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

export default SearchBar;
