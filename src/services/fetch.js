import { UPEM_URL } from "./upem";

const GRAPH_URL = UPEM_URL + "/graphql";

const getConfig = (query, variables, token) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: token
  },
  body: JSON.stringify({
    query: query,
    variables: variables
  })
});

const getResult = (result, name, def) => {
  if (result.errors) {
    console.log("Error =>", result.errors);
  }

  const data = result.data;

  if (data && data[name]) {
    return data[name];
  }

  return def;
};

export const fetchUser = token => {
  const graph = `query {
    user {
      uid
    }
  }`;

  return fetch(GRAPH_URL, getConfig(graph, null, token))
    .then(result => result.json())
    .then(result => getResult(result, "user", null));
};

export const fetchProjects = () => {
  const graph = `query {
    projects {
      id
      name
    }
  }`;

  return fetch(GRAPH_URL, getConfig(graph))
    .then(result => result.json())
    .then(result => getResult(result, "projects", null));
};

export const fetchEvents = params => {
  const graph = `query(
    $projectId: Int!,
    $resource: String!,
    $startDate: String!,
    $endDate: String!
  ) {
    events(
      projectId: $projectId,
      resources: $resource,
      startDate: $startDate,
      endDate: $endDate
    ) {
      id
      name
      startHour
      endHour
      instructor
      classroom
      class
      date
      color
    }
  }`;

  return fetch(GRAPH_URL, getConfig(graph, params))
    .then(result => result.json())
    .then(result => getResult(result, "events", []));
};

export const fetchResource = params => {
  const graph = `query($projectId: Int!, $id: Int!, $startDate: String!, $endDate: String!) {
    resource(projectId: $projectId, id: $id) {
      id
      name
      category
      events(projectId: $projectId, startDate: $startDate, endDate: $endDate) {
        id
        name
        startHour
        endHour
        instructor
        classroom
        class
        date
        color
      }
    }
  }`;

  return fetch(GRAPH_URL, getConfig(graph, params))
    .then(result => result.json())
    .then(result => getResult(result, "resource", null));
};

export const fetchResources = params => {
  const graph = `query($projectId: Int!) {
    resources(projectId: $projectId) {
      id
      name
    }
  }`;

  return fetch(GRAPH_URL, getConfig(graph, params))
    .then(result => result.json())
    .then(result => getResult(result, "resources", []));
};
