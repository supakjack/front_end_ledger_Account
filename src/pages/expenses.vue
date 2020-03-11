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
        <!-- strat input ชื่อรายการ -->
        <q-input outlined v-model="bookId" label="ชื่อกระเปา" />
        <!-- end input ชื่อรายการ -->
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
        <q-btn color="secondary" label="บันทีก" />
      </center>
    </div>
    <!-- end ปุ่มบันทึก  -->
  </q-page>
</template>

<script>
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
      currencyLabels: ""
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
    }
  }
};
</script>