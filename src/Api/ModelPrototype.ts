import axios, { AxiosResponse } from "axios";

export enum Method {
  GET = 0,
  POST,
  PUT,
  DELETE,
}

export default abstract class ModelPrototype {
  protected Method: Method = 0;
  protected Url: string = "";

  protected async request(data?: any): Promise<any> {
    try {
      const url = new URL(process.env.API_URL + this.Url);
      let Response: any;
      switch (this.Method) {
        case Method.GET:
          if (typeof data === "object") {
            const keys = Object.keys(data);
            keys.forEach((key: any) => {
              const value = data[key];
              if (value !== null) {
                url.searchParams.set(key, value);
              }
            });
          }

          Response = await axios.get(url.toString(), {
            headers: {
              Accept: "application/json",
            },
          });
          break;
        case Method.POST:
          Response = await axios.post(url.toString(), data ? data : {}, {
            headers: {
              Accept: "application/json",
            },
          });
          break;
        case Method.PUT:
          Response = await axios.put(url.toString(), data ? data : {}, {
            headers: {
              Accept: "application/json",
            },
          });
          break;
        case Method.DELETE:
          Response = await axios.delete(url.toString(), {
            headers: {
              Accept: "application/json",
            },
          });
          break;
      }

      return Response.data;
    } catch (Exception) {
      throw Exception.response.data.error;
    }
  }

  protected withUrl(Url: string) {
    this.Url = Url;
    return this;
  }

  protected setMethod(Method: Method) {
    this.Method = Method;
    return this;
  }
}
