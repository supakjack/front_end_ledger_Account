import AxiosServices from "./../services/AxiosServices";
import ChartServices from "./../services/ChartServices";
import SwalServices from "./../services/SwalServices";
import FacebookServices from "./../services/FacebookServices";

export default class FacadeServices {
  #axiosServices = AxiosServices;
  #chartServices = ChartServices;
  #swalServices = SwalServices;
  #facebookServices = FacebookServices;
  constructor() {
    this.#axiosServices = AxiosServices;
    this.#chartServices = ChartServices;
    this.#swalServices = SwalServices;
    this.#facebookServices = FacebookServices;
  }
  makeAxios() {
    return this.#axiosServices;
  }
  makeChart() {
    return this.#axiosServices;
  }
  makeAxios() {
    return this.#axiosServices;
  }
}
