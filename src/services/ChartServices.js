import Chart from "chart.js";
export default class ChartServices {
  #chart;
  constructor() {
    this.#chart = Chart;
  }
  makeChart(id, type, data, options) {
    var ctx = document.getElementById(id);
    var myChart = new this.#chart(ctx, {
      type: type,
      data: data,
      options: options
    });
  }
}
