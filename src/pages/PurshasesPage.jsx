import { useEffect } from "react"
import UsePurshases from "../hooks/UsePurshases"
import ProductPurshased from "../components/PurshasesPage/ProductPurshased"


const PurshasesPage = () => {

const { getAllPurshases, purshases } = UsePurshases()

useEffect (()=> { 
    getAllPurshases()
}, [])


  return (
    <section>
      <h2>My PurshasesPage</h2>
      <div>
        {
        purshases?.map(pursh => (
            <ProductPurshased
                key={pursh.id}
                purshase={pursh}
            />
        ))
        }
      </div>
    </section>
  )
}

export default PurshasesPage
