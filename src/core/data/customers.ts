import ApiService from "@/core/services/ApiService";

interface ICustomer {
  id: number;
  code: string;
  name: string;
  customerTypeId?: number;
  cap?: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  province?: string;
  administrativeOfficeAddress?: string;
  administrativeOfficeZipCode?: string;
  administrativeOfficeCity?: string;
  administrativeOfficeCountry?: string;
  administrativeOfficeProvince?: string;
  operatingOfficeAddress?: string;
  operatingOfficeZipCode?: string;
  operatingOfficeCity?: string;
  operatingOfficeCountry?: string;
  operatingOfficeProvince?: string;
  recipientAddress?: string;
  recipientZipCode?: string;
  recipientCity?: string;
  recipientCountry?: string;
  recipientProvince?: string;
  vatNumber?: string;
  fiscalCode?: string;
  contactPerson?: string;
  phone?: string;
  mobile?: string;
  email: string;
  pec?: string;
  uniqueCode?: string;
  zone?: string;
  referenceAgent?: string;
  paymentMethodId?: number;
  bankCoordinates?: string;
  notes?: string;
  fax?: string;
  secondPhone?: string;
  activity?: string;
  discount?: string;
  increment?: string;
  bank?: string;
  currency?: string;
  status?: string;
  deliveryTypeId?: number;
  creationDate: string;
  updateDate: string;
  deliveryType: {
    id: number;
    name: string;
  };
  paymentType: {
    id: number;
    name: string;
  };
  customerType: {
    id: number;
    name: string;
  };
}

const getCustomers = (filterRequest: string) => {
  return ApiService.get(
    `Customers/Get?currentPage=0&filterRequest=${filterRequest}`,
    ""
  )
    .then(({ data }) => {
      const results: Array<ICustomer> = data.data.map((item) => ({
        id: item.id,
        code: item.code,
        name: item.name,
        customerTypeId: item.costomerTypeId,
        cap: item.cap,
        address: item.address,
        zipCode: item.zipCode,
        city: item.city,
        country: item.country,
        province: item.province,
        administrativeOfficeAddress: item.administrativeOfficeAddress,
        administrativeOfficeZipCode: item.administrativeOfficeZipCode,
        administrativeOfficeCity: item.administrativeOfficeCity,
        administrativeOfficeCountry: item.administrativeOfficeCountry,
        administrativeOfficeProvince: item.administrativeOfficeProvince,
        operatingOfficeAddress: item.operatingOfficeAddress,
        operatingOfficeZipCode: item.operatingOfficeZipCode,
        operatingOfficeCity: item.operatingOfficeCity,
        operatingOfficeCountry: item.operatingOfficeCountry,
        operatingOfficeProvince: item.operatingOfficeProvince,
        recipientAddress: item.recipientAddress,
        recipientZipCode: item.recipientZipCode,
        recipientCity: item.recipientCity,
        recipientCountry: item.recipientCountry,
        recipientProvince: item.recipientProvince,
        vatNumber: item.vatNumber,
        fiscalCode: item.fiscalCode,
        contactPerson: item.contactPerson,
        phone: item.phone,
        mobile: item.mobile,
        email: item.email,
        pec: item.pec,
        uniqueCode: item.uniqueCode,
        zone: item.zone,
        referenceAgent: item.referenceAgent,
        paymentMethodId: item.paymentMethodId,
        bankCoordinates: item.bankCoordinates,
        notes: item.notes,
        fax: item.fax,
        secondPhone: item.secondPhone,
        activity: item.activity,
        discount: item.discount,
        increment: item.increment,
        bank: item.bank,
        currency: item.currency,
        status: item.status,
        deliveryTypeId: item.deliveryTypeId,
        creationDate: item.creationDate,
        updateDate: item.updateDate,
        customerType: {
          id: item.customerType?.id,
          name: item.customerType?.name,
        },
        deliveryType: {
          id: item.deliveryMethod?.id,
          name: item.deliveryMethod?.name,
        },
        paymentType: {
          id: item.paymentType?.id,
          name: item.paymentType?.name,
        },
      }));
      return results;
    })
    .catch(({ response }) => {
      console.error(response);
      return [];
    });
};

const getCustomer = (id) => {
  return ApiService.get(`Customers/GetById?id=${id}`, "")
    .then(({ data }) => {
      const item = data;
      const result: ICustomer = {
        id: item.id,
        code: item.code,
        name: item.name,
        customerTypeId: item.costomerTypeId,
        cap: item.cap,
        address: item.address,
        zipCode: item.zipCode,
        city: item.city,
        country: item.country,
        province: item.province,
        administrativeOfficeAddress: item.administrativeOfficeAddress,
        administrativeOfficeZipCode: item.administrativeOfficeZipCode,
        administrativeOfficeCity: item.administrativeOfficeCity,
        administrativeOfficeCountry: item.administrativeOfficeCountry,
        administrativeOfficeProvince: item.administrativeOfficeProvince,
        operatingOfficeAddress: item.operatingOfficeAddress,
        operatingOfficeZipCode: item.operatingOfficeZipCode,
        operatingOfficeCity: item.operatingOfficeCity,
        operatingOfficeCountry: item.operatingOfficeCountry,
        operatingOfficeProvince: item.operatingOfficeProvince,
        recipientAddress: item.recipientAddress,
        recipientZipCode: item.recipientZipCode,
        recipientCity: item.recipientCity,
        recipientCountry: item.recipientCountry,
        recipientProvince: item.recipientProvince,
        vatNumber: item.vatNumber,
        fiscalCode: item.fiscalCode,
        contactPerson: item.contactPerson,
        phone: item.phone,
        mobile: item.mobile,
        email: item.email,
        pec: item.pec,
        uniqueCode: item.uniqueCode,
        zone: item.zone,
        referenceAgent: item.referenceAgent,
        paymentMethodId: item.paymentMethodId,
        bankCoordinates: item.bankCoordinates,
        notes: item.notes,
        fax: item.fax,
        secondPhone: item.secondPhone,
        activity: item.activity,
        discount: item.discount,
        increment: item.increment,
        bank: item.bank,
        currency: item.currency,
        status: item.status,
        deliveryTypeId: item.deliveryTypeId,
        creationDate: item.creationDate,
        updateDate: item.updateDate,
        deliveryType: {
          id: item.deliveryMethod?.id,
          name: item.deliveryMethod?.name,
        },
        paymentType: {
          id: item.paymentType?.id,
          name: item.paymentType?.name,
        },
        customerType: {
          id: item.customerType?.id,
          name: item.customerType?.name,
        },
      };
      return result;
    })
    .catch(({ response }) => {
      console.log(response);
      return undefined;
    });
};

export { getCustomers, getCustomer }
export type { ICustomer };
