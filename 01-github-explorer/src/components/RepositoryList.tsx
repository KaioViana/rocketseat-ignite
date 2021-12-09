import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'


interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [reposistories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          reposistories.map(repository => {
            return (
              <RepositoryItem key={repository.id} repository={repository}/>
            )
          })
        }
      </ul>
    </section>
  )
}