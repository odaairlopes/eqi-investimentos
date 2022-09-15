import { Typography, Stack } from "@mui/material";
import { BarChart, XAxis, YAxis, Bar, Legend, Label } from "recharts";
import { formatDataAPI } from "../../utils/formatDataFromAPI";
import { formatNumber } from "../../utils/formatNumber";
import { Cards, Content } from "./styles";

const Result = ({ data }: any) => {
  const formattedData = formatDataAPI(data);

  return (
    <>
      <Content>
        <Typography variant="h5" fontWeight="bolder" marginBottom="20px">
          Resultado da Simulação
        </Typography>
        <Stack flexDirection="row" flexWrap="wrap" gap="1.5rem">
          <Cards square elevation={3}>
            <p>
              <strong>Valor final Bruto</strong>
            </p>
            <p>R$ {formatNumber(data.valorFinalBruto)}</p>
          </Cards>
          <Cards square elevation={3}>
            <p>
              <strong>Aliquota do IR</strong>
            </p>
            <p>R$ {formatNumber(data.aliquotaIR)}</p>
          </Cards>
          <Cards square elevation={3}>
            <p>
              <strong>Valor pago em IR</strong>
            </p>
            <p>R$ {formatNumber(data.valorPagoIR)}</p>
          </Cards>
          <Cards square elevation={3}>
            <p>
              <strong>Valor Final Líquido</strong>
            </p>
            <p className="value">R$ {formatNumber(data.valorFinalLiquido)}</p>
          </Cards>
          <Cards square elevation={3}>
            <p>
              <strong>Valor Total Investido</strong>
            </p>
            <p>R$ {formatNumber(data.valorTotalInvestido)}</p>
          </Cards>
          <Cards square elevation={3}>
            <p>
              <strong>Ganho Líquido</strong>
            </p>
            <p className="value">R$ {formatNumber(data.ganhoLiquido)}</p>
          </Cards>

          <BarChart
            width={730}
            height={250}
            data={formattedData}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" dx={5}>
              <Label value="Tempo (meses)" offset={-8} position="bottom" />
            </XAxis>
            <YAxis
              tick={false}
              label={{
                value: "Valor (R$)",
                angle: -90,
              }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ position: "relative", marginTop: "-10px" }}
            />
            <Bar
              dataKey="comAporte"
              stackId="a"
              fill="#000"
              barSize={30}
              style={{ stroke: "#EFEFEF", strokeWidth: 1 }}
            />
            <Bar
              dataKey="semAporte"
              stackId="a"
              fill="#ED8E53"
              barSize={30}
              style={{ stroke: "#EFEFEF", strokeWidth: 1 }}
            />
          </BarChart>
        </Stack>
      </Content>
    </>
  );
};

export default Result;
