export const formatDataAPI = (data: any) => {
  const results: any[] = [];
  function splitKey(key: any) {
    const indexOfDelimiter = key.lastIndexOf("-");

    return {
      name: key.substring(indexOfDelimiter + 1),
      key: key.substring(0, indexOfDelimiter),
    };
  }
  function getItemFromResults(name: any) {
    return results.find((r) => r.name === name);
  }

  function processKeyValuePair(
    name: string,
    key: any,
    comAporte: number,
    semAporte: number
  ) {
    const item = getItemFromResults(name);

    if (!item) {
      results.push({ name, comAporte, semAporte });
      return;
    }

    item[key] = comAporte;
    item[key] = semAporte;
  }

  for (const k in data.graficoValores.comAporte &&
    data.graficoValores.semAporte) {
    const { name, key } = splitKey(k);
    const comAporte = data.graficoValores.comAporte[k];
    const semAporte = data.graficoValores.semAporte[k];
    processKeyValuePair(name, key, comAporte, semAporte);
  }

  return results;
};
