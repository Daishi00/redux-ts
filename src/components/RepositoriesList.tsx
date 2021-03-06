import { useState } from "react"
import { useActions } from "../hooks/useActions"
import { useSelector } from "react-redux"

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("")
  const { searchRepositories } = useActions()
  const state = useSelector(state => state)
  console.log(state)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList
