export const format = {
  currency: (value: number) => {
    const formatedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

    return formatedValue
  },
  date: (date: string) => {
    const formatedDate = new Intl.DateTimeFormat('pt-BR').format(new Date(date))

    return formatedDate
  },
}
