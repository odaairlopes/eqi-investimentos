import React, { useEffect, useState } from "react";
import {
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  ConfirmButton,
  Container,
  Input,
  Content,
  CleanButton,
} from "./styles";
import { RiInformationLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { getIndicators, getSimulation } from "../../services/api";
import { NumericFormat } from "react-number-format";
import Result from "../Result";
import Form from "../FormSimulator";

interface IndicatorsProps {
  nome: string | any;
  valor: number | any;
}

interface ResultsProps {
  indexingType: string;
  incomeType: string;
}

const Simulator = () => {
  const [ipca, setIpca] = useState<IndicatorsProps>();
  const [cdi, setCdi] = useState<IndicatorsProps>();
  const [income, setIncome] = useState("bruto");
  const [indexing, setIndexing] = useState("pre");

  const theme = createTheme({
    components: {
      MuiToggleButton: {
        styleOverrides: {
          root: {
            width: "100%",
            borderRadius: "10px",
            border: "1px solid black",
            "&.Mui-selected": {
              backgroundColor: "#ED8E53",
              color: "#fff",
              borderLeft: "1px solid black",
              border: "1px solid black",
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    const getResults = async () => {
      setIpca(await getIndicators("ipca"));
      setCdi(await getIndicators("cdi"));
    };

    getResults();
  }, []);

  const handleChangeIncome = (
    event: React.MouseEvent<HTMLElement>,
    newIncome: string
  ) => {
    setIncome(newIncome);
  };

  const handleChangeIndexing = (
    event: React.MouseEvent<HTMLElement>,
    newIndexing: string
  ) => {
    setIndexing(newIndexing);
  };

  const handleSubmit = () => {
    <Result indexingType={indexing} incomeType={income} />;
    console.log(income);
    console.log(indexing);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <FormSimulator /> */}
      <h1>Trste</h1>
    </ThemeProvider>
  );
};

export default Simulator;
