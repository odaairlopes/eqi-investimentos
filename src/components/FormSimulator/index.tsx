import React, { useEffect, useState } from "react";
import {
  Typography,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  ConfirmButton,
  Input,
  Content,
  CleanButton,
  Container,
  Form,
} from "./styles";
import { RiInformationLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { getIndicators } from "../../services/api";
import { NumericFormat } from "react-number-format";
import { IndicatorsProps, SimulateProps } from "../../types/types";

const FormSimulator = ({
  onSubmit,
  setIncomeType,
  incomeType,
  indexingType,
  setIndexingType,
}: SimulateProps) => {
  const [ipca, setIpca] = useState<IndicatorsProps>();
  const [cdi, setCdi] = useState<IndicatorsProps>();

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
    setIncomeType(newIncome);
  };

  const handleChangeIndexing = (
    event: React.MouseEvent<HTMLElement>,
    newIndexing: string
  ) => {
    setIndexingType(newIndexing);
  };

  return (
    <Container>
      <Form>
        <Content>
          <Typography variant="h5" fontWeight="bolder" marginBottom="20px">
            Simulador
          </Typography>

          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginBottom="10px"
          >
            <Typography variant="body1">Rendimento</Typography>
            <RiInformationLine />
          </Stack>
          <Stack flexDirection="row" marginBottom="20px">
            <ToggleButtonGroup
              value={incomeType}
              exclusive
              onChange={handleChangeIncome}
              sx={{ width: "100%" }}
            >
              <ToggleButton value="bruto" name="bruto">
                {incomeType === "bruto" ? <AiOutlineCheck /> : ""} Bruto
              </ToggleButton>
              <ToggleButton value="liquido" name="liquido">
                {incomeType === "liquido" ? <AiOutlineCheck /> : ""} L??quido
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <Stack flexDirection="column" gap="3rem" marginBottom="20px">
            <NumericFormat
              prefix={"R$ "}
              customInput={Input}
              label="Aporte Inicial"
              variant="standard"
              thousandSeparator="."
              decimalScale={2}
              decimalSeparator=","
              name="initialContribuition"
            />
            <NumericFormat
              customInput={Input}
              label="Prazo (em meses)"
              variant="standard"
              name="term"
            />
            <Input
              label="IPCA (ao ano)"
              variant="standard"
              value={ipca?.valor.toString() + "%"}
              InputProps={{ readOnly: true }}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </Content>
        <Content>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginBottom="10px"
            marginTop="50px"
          >
            <Typography variant="body1">Tipos de indexa????o</Typography>
            <RiInformationLine />
          </Stack>
          <Stack flexDirection="row" marginBottom="20px">
            <ToggleButtonGroup
              value={indexingType}
              exclusive
              onChange={handleChangeIndexing}
              sx={{ width: "100%" }}
            >
              <ToggleButton value="pre" name="pre">
                {" "}
                {indexingType === "pre" ? <AiOutlineCheck /> : ""} PR??
              </ToggleButton>
              <ToggleButton value="pos" name="pos">
                {" "}
                {indexingType === "pos" ? <AiOutlineCheck /> : ""} POS
              </ToggleButton>
              <ToggleButton value="ipca" name="fixado">
                {" "}
                {indexingType === "ipca" ? <AiOutlineCheck /> : ""} FIXADO
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <Stack flexDirection="column" gap="3rem" marginBottom="20px">
            <NumericFormat
              prefix={"R$ "}
              customInput={Input}
              name="monthlyContribuition"
              label="Aporte Mensal"
              variant="standard"
              thousandSeparator="."
              decimalScale={2}
              decimalSeparator=","
            />
            <NumericFormat
              name="profitability"
              suffix={"%"}
              customInput={Input}
              label="Rentabilidade"
              variant="standard"
            />
            <Input
              label="CDI (ao ano)"
              type="text"
              variant="standard"
              value={cdi?.valor.toString() + "%"}
              InputProps={{ readOnly: true }}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </Content>
      </Form>
      <Stack className="stack-buttons" gap="1rem">
        <CleanButton type="submit">Limpar campos</CleanButton>
        <ConfirmButton type="submit" onClick={onSubmit}>
          Simular
        </ConfirmButton>
      </Stack>
    </Container>
  );
};

export default FormSimulator;
