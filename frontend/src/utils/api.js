import { create } from "apisauce";

// define the api
const api = create({
  baseURL: `${process.env.REACT_APP_BASE_API}`,
});

/**
 *
 * route = "/api/chucknorris/random"
 * param = null
 * becomes "/api/chucknorris/random"
 *
 * route = "/api/chucknorris/joke"
 * params = { category: "dev", limitNumber: 4 }
 * bcomes "/api/chucknorris/joke?category=dev&limitNumber=4"
 *
 * @param {The route endpoint} route
 * @param {Query key parameters} params
 */
export const getData = async (route, params) => {
  const result = await api.get(route, params);
  if (!result.ok)
    return alert("Did you start the API server with Visual Studio?");

  return result;
};
