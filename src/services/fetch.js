import { SDK } from "./upem";

const extract = (data, errors, type, def) => {
  if (errors) {
    console.log(errors);
  }

  if (data && data[type]) {
    return data[type];
  }

  return def;
};

export const fetchUser = token => {
  return new Promise((resolve, reject) => {
    SDK.getUser((data, errors) => {});
  });
};

export const fetchProjects = () => {
  return new Promise((resolve, reject) => {
    SDK.getProjects((data, errors) =>
      resolve(extract(data, errors, "projects", []))
    );
  });
};

export const fetchResource = params => {
  return new Promise((resolve, reject) => {
    SDK.getResourceWithEvents(
      params.projectId,
      params.id,
      params.startDate,
      params.endDate,
      (data, errors) => resolve(extract(data, errors, "resource", {}))
    );
  });
};

export const fetchResources = params => {
  return new Promise((resolve, reject) => {
    SDK.getResources(params.projectId, (data, errors) =>
      resolve(extract(data, errors, "resources", []))
    );
  });
};
