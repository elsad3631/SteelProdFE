import ApiService from "@/core/services/ApiService";

interface IAccessory {
  id: number;
  code: string;
  name: string;
  price: number;
  accessoryTypeId: number;
  supplierArticleCode: string;
  description: string;
  unitOfMeasure: string;
  supplierId: number;
  packageQuantity: number;
  quantity: number,
  minimumStock: number;
  deliveryTimeframe: string;
  deliveryTypeId: number;
  accessoryType:{
    id:number;
    name: string;
  };
  supplier:{
    id: number;
    name: string;
    code: string;
    uniqueCode: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    province: string;
    vatNumber: string;
    fiscalCode: string;
    contactPerson: string;
    phone: number;
    mobile: number;
    email: string;
    pec: string;
    fax: string;
    zone: string;
    referenceAgent: string;
    paymentTypeId: number;
    bankDetails: string;
    notes: string;
    creationDate: string;
    updateDate: string;
  };
  deliveryType:{
    id:number;
    name: string;
  };
}

const getAccessories = (filterRequest: string) => {
  return ApiService.get(`Accessories/Get?currentPage=0&filterRequest=${filterRequest}`, '')
    .then(({ data }) => {
      const results: Array<IAccessory> = data.data.map((item) => ({
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
        quantity: item.quantity,
        accessoryType: {
          id: item.accessoryType?.id,
          name: item.accessoryType?.name
        },
        deliveryType: {
          id: item.deliveryMethod?.id,
          name: item.deliveryMethod?.name
        },
        supplier:{
          id: item.supplier?.id,
          name: item.supplier?.name,
          code: item.supplier?.code,
          uniqueCode: item.supplier?.uniqueCode,
          address:item.supplier?.address,
          zipCode: item.supplier?.zipCode,
          city: item.supplier?.city,
          country: item.supplier?.country,
          province: item.supplier?.province,
          vatNumber: item.supplier?.vatNumber,
          fiscalCode: item.supplier?.fiscalCode,
          contactPerson: item.supplier?.contactPerson,
          phone: item.supplier?.phone,
          mobile: item.supplier?.mobile,
          email: item.supplier?.email,
          pec: item.supplier?.pec,
          fax: item.supplier?.fax,
          zone: item.supplier?.zone,
          referenceAgent: item.supplier?.referenceAgent,
          paymentTypeId: item.supplier?.paymentTypeId,
          bankDetails: item.supplier?.bankDetails,
          notes: item.supplier?.notes,
          creationDate: item.supplier?.creationDate,
          updateDate: item.supplier?.updateDate,
        }
      }));
      return results;
    })
    .catch(({ response }) => {
      console.log(response);
      return [];
    });
};

const getAccessory = (id) => {
  return ApiService.get(`Accessories/GetById?id=${id}`, '')
    .then(({ data }) => {
      const item = data;
      const result: IAccessory = {
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
        quantity: item.quantity,
        minimumStock: item.minimumStock,
        deliveryTimeframe: item.deliveryTimeframe,
        deliveryTypeId: item.deliveryTypeId,
        accessoryType: {
          id: item.accessoryType?.id,
          name: item.accessoryType?.name
        },
        deliveryType: {
          id: item.deliveryMethod?.id,
          name: item.deliveryMethod?.name
        },
        supplier:{
          id: item.supplier?.id,
          name: item.supplier?.name,
          code: item.supplier?.code,
          uniqueCode: item.supplier?.uniqueCode,
          address:item.supplier?.address,
          zipCode: item.supplier?.zipCode,
          city: item.supplier?.city,
          country: item.supplier?.country,
          province: item.supplier?.province,
          vatNumber: item.supplier?.vatNumber,
          fiscalCode: item.supplier?.fiscalCode,
          contactPerson: item.supplier?.contactPerson,
          phone: item.supplier?.phone,
          mobile: item.supplier?.mobile,
          email: item.supplier?.email,
          pec: item.supplier?.pec,
          fax: item.supplier?.fax,
          zone: item.supplier?.zone,
          referenceAgent: item.supplier?.referenceAgent,
          paymentTypeId: item.supplier?.paymentTypeId || null,
          bankDetails: item.supplier?.bankDetails || "",
          notes: item.supplier?.notes || "",
          creationDate: item.supplier?.creationDate || "",
          updateDate: item.supplier?.updateDate || "",
        }
      };
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getAccessories, getAccessory };

// export default getAccessories; getAccessory;

export type { IAccessory };
