// ES6 Modules or TypeScript
import Swal from "sweetalert2";
export default class SwalServices {
  #swal
  constructor() {
    this.#swal = Swal;
  }
  makeAlert() {
    return this.#swal;
  }
}
