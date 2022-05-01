export function PaCO2EsperadaAcidoseFormula(HCO3: number) {
  const minHCO3 = 1;
  const maxHCO3 = 50;
  if (!(HCO3 >= minHCO3 && HCO3 <= maxHCO3))
    return `Valor invalido, o valor deve estar entre ${minHCO3} e ${maxHCO3}`;
  return ((1.5 * HCO3) + 8).toString();
}