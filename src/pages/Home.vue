<template>
  <q-page padding>
    <!-- content -->

    <div class="q-pa-md">
      <div class="column" style="height: 150px">
        <div class="col">
          <center>
            <b style="font-size:25px; text-align:center;">ยอดรวมเงินทั้งหมด</b>
          </center>
        </div>
        <div class="col">
          <center>
            <b style="font-size:18px; text-align:center;">{{total}} {{currency}}</b>
          </center>
        </div>
      </div>
      <center>
        <canvas id="myChart" height="100vh" width="130vw"></canvas>
      </center>

      <div class="row" style="font-size:20px;">
        <div class="col" style="color:red; text-align:center;">
          <b>รายจ่าย</b>
        </div>
        <div class="col" style="color:blue; text-align:center;">
          <b>รายรับ</b>
        </div>
      </div>

      <div class="row" style="font-size:15px;">
        <div class="col" style="color:red; text-align:center;">{{expense}} {{currency}}</div>
        <div class="col" style="color:blue; text-align:center;">{{income}} {{currency}}</div>
      </div>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-banner class="bg-grey-3">
        <p style="text-align:left;"></p>
        <div>วันนี้</div>
        <div>11 มีนาคม 2020</div>
        <span style="float:right;">
          <button style="border:1px solid transparent; background-color: transparent;">
            <i class="material-icons" style="font-size:40px">keyboard_arrow_right</i>
          </button>
        </span>
      </q-banner>
      <q-banner class="bg-red-3">
        <p style="text-align:left;">
          <i class="material-icons" style="color:red">
            <div style="font-size:25px">local_grocery_store</div>
          </i>รายจ่าย
          <span style="float:right;">
            <p align="right" v-if="expense_today == null">0 {{currency}}</p>
            <p align="right" v-else>{{expense_today}} {{currency}}</p>
          </span>
        </p>
      </q-banner>
      <q-banner class="bg-green-3">
        <p style="text-align:left;">
          <i class="material-icons" style="color:green">
            <div style="font-size:25px">local_atm</div>
          </i>รายรับ
          <span style="float:right;">
            <p align="right" v-if="income_today == null">0 {{currency}}</p>
            <p align="right" v-else>{{income_today}} {{currency}}</p>
          </span>
        </p>
      </q-banner>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div align="center">
        <q-btn
          exact
          to="/expenses"
          size="12px"
          class="q-px-xl q-py-xs"
          color="red"
          label="รายจ่าย"
        />
        <q-btn exact to="/Income" size="12px" class="q-px-xl q-py-xs" color="green" label="รายรับ" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Chart from "chart.js";
import FacadeServices from "./../services/FacadeServices";
const axios = new FacadeServices().makeAxios();

export default {
  name: "Home",
  mounted() {
    // console.log("facebookId : " + $store.state.facebookId);

    // $store.state.testState = 12345;
    // console.log("testState change to 12345 : " + $store.state.testState);

    new axios().getHttp("books/amount/5").then(result => {
      result.data.map((item, index) => {
        console.log(item);
        this.total = item.amount;
      });
    });

    new axios().getHttp("books/currency/2").then(result => {
      result.data.map((item, index) => {
        console.log(item);
        this.currency = item.currency;
      });
    });

    new axios().getHttp("books/expense/2").then(result => {
      result.data.map((item, index) => {
        console.log(item);
        this.expense = item.expense;
        this.chart_data[0] = item.expense;
      });
    });
    new axios().getHttp("books/income/2").then(result => {
      result.data.map((item, index) => {
        console.log(item);
        this.income = item.income;
        this.chart_data[1] = item.income;
        this.showChart();
      });
    });

    new axios().getHttp("books/expense/2/now").then(result => {
      //  console.log(result)
      result.data.map((item, index) => {
        console.log(item.expense);
        this.expense_today = item.expense;
      });
    });
    new axios().getHttp("books/income/2/now").then(result => {
      //  console.log(result)
      result.data.map((item, index) => {
        console.log(item.income);
        this.income_today = item.income;
      });
    });
  },
  data() {
    return {
      total: "1000.50",
      expense: "100.00",
      expense_today: "100.00",
      income: "1000.50",
      income_today: "1000.50",
      currency: "บาท",
      chart_data: [],
      value: 10
    };
  },
  methods: {
    addIn() {
      alert("income service");
      console.log(home_income);
      home_income = "income_service";
    },
    addEx() {
      alert("Ex service");
      console.log(home_income);
      home_income = "expense_service";
    },
    showChart() {
      console.log(this.chart_data[0]);
      console.log(this.chart_data[1]);
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["รายจ่าย", "รายรับ"],
          datasets: [
            {
              label: "# of Votes",
              data: [this.chart_data[0], this.chart_data[1]],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)"
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false
                }
              }
            ]
          }
        }
      });
    }
  }
};
</script>