<template>
  <div class="q-pa-md">
    <div class="column" style="height: 150px">
      <div class="col">
        <center>
          <b style="font-size:25px; text-align:center;">ยอดรวมเงินทั้งหมด</b>
        </center>
      </div>
      <div class="col">
        <center>
          <b style="font-size:18px; text-align:center;">{{total}} บาท</b>
        </center>
      </div>
    </div>
    <center>
    
      <canvas id="myChart" height="100vh" width="130vw"></canvas>
    </center>

    <div class="row" style="font-size:20px;">
      <div class="col" style="color:red; text-align:center;"><b>รายจ่าย</b></div>
      <div class="col" style="color:blue; text-align:center;"><b>รายรับ</b></div>
    </div>

    <div class="row" style="font-size:15px;">
      <div class="col" style="color:red; text-align:center;">{{expense}} บาท</div>
      <div class="col" style="color:blue; text-align:center;">{{Income}} บาท</div>
    </div>
  </div>
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
    labels: ["รายจ่าย","รายรับ"],
    datasets: [
      {
        label: "# of Votes",
        data: [100,1000.50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          
        ],
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
             display: false,
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
      Income: "1000.50",
      value: 10
    };
  }
};
</script>