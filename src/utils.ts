export function formatDate(date: string): string {
    const [day, month, year] = date.split("-")
  
    const monthText = new Date(Number(year), Number(month) - 1, Number(day)).toLocaleString("default", { month: "long" })
    const monthTextUpper = monthText.charAt(0).toUpperCase() + monthText.slice(1)
    const month3Letter = monthTextUpper.slice(0, 3)
  
    return `${month3Letter} ${year}`
  }
  
export function splittedList(list: string): string[] {
    return list.split("\n")
  }