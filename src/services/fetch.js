import { UPEM_URL } from './upem'

const GRAPH_URL = UPEM_URL + "/graphql"

const getConfig = (query, variables, token) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token
  },
  body: JSON.stringify({
    query: query,
    variables: variables
  })
})

export const fetchUser = (token) => {
  const graph = `query {
    user {
      uid
    }
  }`

  return fetch(GRAPH_URL, getConfig(graph, null, token))
  .then(result => result.json())
  .then(result => result.data)
}

export const fetchEvents = (params) => {
  const graph = `query($resources: String!, $date: String, $startDate: String, $endDate: String) {
    calendar {
      events(resources: $resources,
        date: $date,
        startDate: $startDate,
        endDate: $endDate) {
          id
          name
          startHour
          endHour
          instructor
          classroom
          color
          date
      }
    }
  }`

  let variables = {
    resources: params.resources
  }

  if (params.date) variables.date = params.date.format("MM/DD/YYYY").toString()
  if (params.startDate) variables.startDate = params.startDate.format("MM/DD/YYYY").toString()
  if (params.endDate) variables.endDate = params.endDate.format("MM/DD/YYYY").toString()

  return fetch(GRAPH_URL, getConfig(graph, variables))
  .then(result => result.json())
  .then(result => result.data)
}

export const fetchResources = () => {
  const graph = `query {
    calendar {
      resources {
        id
      }
    }
  }`

  return fetch(GRAPH_URL, getConfig(graph))
  .then(result => result.json())
  .then(result => result.data)
}
