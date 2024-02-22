import ApiService from "@/core/services/ApiService";

interface IMarking {
  id: number;
  MaterialName?: string;
  IdFac?: string;
  Dx?: string;
  Dy?: string;
  Lung?: string;
  Larg?: string;
  Str?: string;
  From?: string;
  To?: string;
}

const emptyMarking: IMarking = {
  id: 0,
  MaterialName: "",
  IdFac: "0",
  Dx:  "0",
  Dy:  "0",
  Lung:  "0",
  Larg:  "0",
  Str:  "0",
  From:  "",
  To:  ""
};

const getMarkings = (filterRequest: string) => {
    return ApiService.get(
      `Marking/Get?currentPage=0&filterRequest=${filterRequest}`,
      ""
    )
      .then(({ data }) => {
        const results: Array<IMarking> = data.data;
        return results;
      })
      .catch(({ response }) => {
        console.log(response);
        return [];
      });
  };
  
  const getMarking = (id) => {
    return ApiService.get(`Marking/GetById?id=${id}`, "")
      .then(({ data }) => {
        const result: IMarking = data;
        return result;
      })
      .catch(({ response }) => {
        console.log(response);
        return undefined;
      });
  };
  
  export { getMarkings, getMarking, emptyMarking };
  
  export type { IMarking };