<template>
  <q-page padding>
    <!-- content -->

    <!-- strat name : รายรับ -->
    <h5 style="text-align:center" class="text-green">รายรับ</h5>
    <!-- end name : รายรับ -->

    <!-- strat img รายรับ -->
    <center>
      <q-img src="https://image.flaticon.com/icons/svg/1086/1086733.svg" width="120px" />
    </center>
    <!-- end img รายรับ -->
    <br />

    <!-- strat input -->
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 400px ">
        <!-- strat select ชื่อรายการ -->
<<<<<<< HEAD
        <q-select outlined v-model="model" :options="options" label="Outlined" /> 
=======
        <q-select outlined v-model="model" :options="options" label="บัญชี" /> 
>>>>>>> 4f7c36228957d2bebcf462ec7c4b4402c40764e3
         <!-- end select ชื่อรายการ -->
         <br />
        <!-- strat input ชื่อรายการ -->
        <q-input outlined v-model="listId" label="รายการ" />
        <!-- end input ชื่อรายการ -->
        <br />
        <!-- strat input จำนวนเงิน  -->
        <q-input outlined v-model="money" :label="currencyLabels" />
        <!-- end input จำนวนเงิน  -->
      </div>
    </div>
    <!-- end input -->

    <!-- strat ปุ่มบันทึก  -->
    <div class="q-pa-md q-gutter-sm">
      <center>
        <q-btn @click="addIn()" color="secondary" label="บันทีก" />
      </center>
    </div>
    <!-- end ปุ่มบันทึก  -->
  </q-page>
</template>

<script>
import $store from "../store/State";
import FacadeServices from "./../services/FacadeServices";
const axios = new FacadeServices().makeAxios();

export default {
  name: "Income",
  mounted() {
    this.currencyLabels = "จำนวนเงิน (" + this.currency + ")";
  },
  data() {
    return {
      total: "1000.50",
      expense: "100.00",
      expense_today: "100.00",
      income: "1000.50",
      income_today: "1000.50",
      currency: "บาท",
      value: 10,
      text: "",
      bookId: "",
      listId: "",
      money: "",
      currencyLabels: "",
       model: null,
      options: [
        'ธนาคาร', 'เงินสด'
      ]
    };
  },
  methods: {
    addIn() {
      let income = {
        id: this.bookId,
        descript: this.listId,
        money: this.money
      };
      console.log(income);
      new axios().postHttp("lists/income", income).then(result => {
        console.log(result);
      });
    },
    addEx() {
      alert("Ex service");
      console.log(home_income);
      home_income = "expense_service";
    }
  }
};
</script>