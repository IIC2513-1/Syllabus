import React, { useState } from "react";
import styled from 'styled-components';
import Input from './Input';
import Select from './Select'

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    const firstInt = parseInt(firstValue, 10);
    const secondInt = parseInt(secondValue, 10);
    if (operator === "+") setResult(firstInt + secondInt)
    else if (operator === "-") setResult(firstInt - secondInt)
    else if (operator === "*") setResult(firstInt * secondInt)
    else if (operator === "/") setResult(firstInt / secondInt)
  }

  return (
    <Wrapper>
      <div>
        <h1>Calculadora IIC2513</h1>
      </div>
      <InputsContainer>
        <Input value={firstValue} setValue={setFirstValue} />
        <Select value={operator} setValue={setOperator} />
        <Input value={secondValue} setValue={setSecondValue} />
      </InputsContainer>
      <SubmitButton onClick={handleSubmit}>Calcular</SubmitButton>
      <Result>{result ? `Resultado: ${result}` : "Presiona calcular para ver el resultado"}</Result>
    </Wrapper>)
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 400px;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
`;

const SubmitButton = styled.button``;

const Result = styled.p`
  font-size: 20px;
`;

export default Calculator;