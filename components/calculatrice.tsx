"use client"
import { useState, useEffect } from "react"

export function Calculatrice() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState("")

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

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", width: "400px" }}>
        <h1 style={{ textAlign: "center" }}>Calculatrice</h1>
        
        <input 
          type="number" 
          placeholder="Nombre 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
        />

        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="/">/</option>
        </select>

        <input 
          type="number" 
          placeholder="Nombre 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", fontSize: "16px" }}
        />

        <button 
          onClick={handleCalculate}
          style={{ width: "100%", padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Calculer
        </button>

        {result && <div style={{ marginTop: "20px", fontSize: "24px", textAlign: "center", fontWeight: "bold" }}>
          Résultat : {result}
        </div>}
      </div>
    </div>
  )
}