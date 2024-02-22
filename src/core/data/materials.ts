import ApiService from "@/core/services/ApiService";

interface IMaterial {
  id: number;
  internalCode: string;
  supplierArticleCode: string;
  name: string;
  description?: string;
  unitOfMeasure?: string;
  function?: string;
  supplierId: number;
  supplier: {
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
  unitPrice?: number;
  packagingQuantity?: number;
  minimumStock?: number;
  quantity?: number;
  deliveryTiming?: string;
  deliveryMethodId: number;
  deliveryType: {
    id: number;
    name: string;
  };
  materialTypeId: number;
  materialType: {
    id: number;
    name: string;
  };
  lastDeliveryDate: Date;
}

const emptyMaterial: IMaterial = {
  id: 0,
  internalCode: "",
  supplierArticleCode: "",
  name: "",
  description: "",
  unitOfMeasure: "",
  function: "",
  supplierId: 0,
  supplier: {
    id: 0,
    name: "",
    code: "",
    uniqueCode: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    province: "",
    vatNumber: "",
    fiscalCode: "",
    contactPerson: "",
    phone: 0,
    mobile: 0,
    email: "",
    pec: "",
    fax: "",
    zone: "",
    referenceAgent: "",
    paymentTypeId: 0,
    bankDetails: "",
    notes: "",
    creationDate: "",
    updateDate: "",
  },
  unitPrice: 0,
  packagingQuantity: 0,
  minimumStock: 0,
  quantity: 0,
  deliveryTiming: "",
  deliveryMethodId: 0,
  deliveryType: {
    id: 0,
    name: "",
  },
  materialTypeId: 0,
  materialType: {
    id: 0,
    name: "",
  },
  lastDeliveryDate: new Date()
}

const getMaterials = (filterRequest: string) => {
  return ApiService.get(
    `Materials/Get?currentPage=0&filterRequest=${filterRequest}`,
    ""
  )
    .then(({ data }) => {
      const results: Array<IMaterial> = data.data;
      return results;
    })
    .catch(({ response }) => {
      console.log(response);
      return [];
    });
};

const getMaterial = (id) => {
  return ApiService.get(`Materials/GetById?id=${id}`, "")
    .then(({ data }) => {
      const result: IMaterial = data;
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getMaterials, getMaterial, emptyMaterial };

export type { IMaterial };
