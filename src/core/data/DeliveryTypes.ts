import ApiService from "@/core/services/ApiService";

interface IDeliveryType {
  id: number;
  name: string;
}

const getDeliveryType = () => {
  return ApiService.get(`DeliveryType/Get`, '')
    .then(({ data }) => {
      const results: Array<IDeliveryType> = data.data.map(item => ({
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

export default getDeliveryType;
export type { IDeliveryType };