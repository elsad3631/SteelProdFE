import ApiService from "@/core/services/ApiService";

interface ICustomer {
  id: number;
  code: string;
  name: string;
  accessoryTypeId: number;
  supplierArticleCode: string;
  description: string;
  unitOfMeasure: string;
  supplierId: number;
  price: string;
  packageQuantity: string;
  minimumStock: string;
  deliveryTimeframe: string;
  deliveryTypeId: number;
}

const getCustomers = (filterRequest: string) => {
  return ApiService.get(`Customers/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<ICustomer> = data.data.map((item) => ({
        id: item.id,
        name: item.name,
        code: item.code,
        price: item.price,
        accessoryTypeId: item.accessoryTypeId,
        supplierArticleCode: item.supplierArticleCode,
        description: item.description,
        unitOfMeasure: item.unitOfMeasure,
        supplierId: item.supplierId,
        packageQuantity: item.packageQuantity,
        minimumStock: item.minimumStock,
        deliveryTimeframe: item.deliveryTimeframe,
        deliveryTypeId: item.deliveryTypeId,
      }));
      return results;
    })
    .catch(({ response }) => {
      console.error(response);
      return [];
    });
};

export default getCustomers;

export type { ICustomer };
