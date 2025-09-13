//ProjectStructure
//import ReactConcepts from "../../pages/ReactConcepts"
import ConceptSection from "../ConceptSection"

export default function ProjectStructure() {
  return (
    <>
      <ConceptSection title="3.1 Estructura de un proyecto React" description="React usa componentes y un árbol de JSX." />
      {/* <h2>3.1 Estructura de un proyecto Reacts</h2> */}
      <p>Un proyecto típico con Vite tiene esta estructura:</p>
      <pre>{`
my-app/
├─ index.html
├─ src/
│  ├─ main.tsx
│  ├─ App.tsx
│  ├─ components/
│  └─ pages/
└─ package.json
`}</pre>
    </>
  )
}