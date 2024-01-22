import ApiService from "@/core/services/ApiService";

interface IAccessoryType {
  id: number;
  name: string;
}

const getAccessoryTypes = () => {
  return ApiService.get(`AccessoryType/Get`, '')
    .then(({ data }) => {
      const results: Array<IAccessoryType> = data.data.map(item => ({
        id: item.id,
        name: item.name
      }));
     return results;
    })
    .catch(({ response }) => {
      console.error(response);
      return [];
    });
};

export default getAccessoryTypes;
export type { IAccessoryType };
