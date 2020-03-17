<template>
  <q-page padding>
    <!-- content -->

    <!-- strat name : รายจ่าย -->
    <h5 style="text-align:center" class="text-red">รายจ่าย</h5>
    <!-- end name : รายจ่าย -->

    <!-- strat img รายจ่าย -->
    <center>
      <q-img src="https://image.flaticon.com/icons/svg/1086/1086741.svg" width="120px" />
    </center>
    <!-- end img รายจ่าย -->
    <br />

    <!-- strat input -->
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 400px">
         <!-- strat select ชื่อรายการ -->
        <q-select outlined v-model="model" :options="options" label="บัญชี" /> 
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
        <q-btn @click="addEx()" color="secondary" label="บันทีก" />
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
  name: "Expenses",
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
    addEx() {
       let expense = {
        id: this.bookId,
        descript: this.listId,
        money: this.money
      };
       console.log(expense);
      new axios().postHttp("lists/expense", expense).then(result => {
        console.log(result);
        });
    }
  }
};
 
</script>