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
        <div>19 กุมภาพันธ์ 2020</div>
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
            <p align="right">{{expense_today}} {{currency}}</p>
          </span>
        </p>
      </q-banner>
      <q-banner class="bg-green-3">
        <p style="text-align:left;">
          <i class="material-icons" style="color:green">
            <div style="font-size:25px">local_atm</div>
          </i>รายรับ
          <span style="float:right;">
            <p align="right">{{income_today}} {{currency}}</p>
          </span>
        </p>
      </q-banner>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div align="center">
        <q-btn @click="addEx()" exact to="/input" size="12px" class="q-px-xl q-py-xs" color="red" label="รายจ่าย" />
        <q-btn @click="addIn()" exact to="/input" size="12px" class="q-px-xl q-py-xs" color="green" label="รายรับ" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Home",
  mounted() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["รายจ่าย", "รายรับ"],
        datasets: [
          {
            label: "# of Votes",
            data: [100, 1000.5],
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
  },
  data() {
    return {
      total: "1000.50",
      expense: "100.00",
      expense_today: "100.00",
      income: "1000.50",
      income_today: "1000.50",
      currency: "บาท",
      value: 10
    };
  },
  methods: {
    addIn(){
      alert("income service");
      console.log(home_income);
      home_income = "income_service"
    },
     addEx(){
      alert("Ex service");
      console.log(home_income);
      home_income = "expense_service"
    }
  },
};
</script>