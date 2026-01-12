import { useState, useEffect, ChangeEvent } from "react"

export function useCalculatrice() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState("")

  const onChangeNum1 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value)
  }

  const onChangeNum2 = (e: ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value)
  }

  const onChangeOperation = (e: ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value)
  }

  useEffect(() => {
    console.log("Num1:", num1, "Num2:", num2, "Operation:", operation)
  }, [num1, num2, operation])

  const handleCalculate = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    let res = 0

    if (operation === "+") res = n1 + n2
    if (operation === "-") res = n1 - n2
    if (operation === "*") res = n1 * n2
    if (operation === "/") res = n1 / n2

    setResult(String(res))
  }

  return {
    num1,
    num2,
    operation,
    result,
    onChangeNum1,
    onChangeNum2,
    onChangeOperation,
    handleCalculate
  }
}