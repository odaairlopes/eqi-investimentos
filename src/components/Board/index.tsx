import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { getSimulation } from "../../services/api";
import { theme } from "../../styles/theme";
import FormSimulator from "../FormSimulator";
import Result from "../Result";
import { Container } from "./styles";

const Board = () => {
  const [incomeType, setIncomeType] = useState<string>("bruto");
  const [indexingType, setIndexingType] = useState<string>("pre");
  const [data, setData] = useState(null);

  const onSubmit = async () => {
    const result = await getSimulation(indexingType, incomeType);
    setData(result);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <FormSimulator
          onSubmit={onSubmit}
          setIncomeType={setIncomeType}
          incomeType={incomeType}
          indexingType={indexingType}
          setIndexingType={setIndexingType}
        />
        {data && <Result data={data} />}
      </Container>
    </ThemeProvider>
  );
};

export default Board;
