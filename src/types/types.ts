import { Dispatch, SetStateAction } from "react";

export interface IndicatorsProps {
  nome: string | any;
  valor: number | any;
}

export interface SimulateProps {
  onSubmit: () => void;
  setIncomeType: Dispatch<SetStateAction<string>>;
  incomeType: string;
  indexingType: string;
  setIndexingType: Dispatch<SetStateAction<string>>;
}
