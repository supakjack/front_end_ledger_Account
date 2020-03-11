<!-- นางสาวพรไพลิน กล่อมจันทร์ และนางสาวพัทธนันท์ ชวลิตสุวรรณ์ [start] หน้า view ของหน้าที่สอง -->
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <div class="row top-center">
        <div class="col-5 text-center" >สรุปรายรับ - รายจ่าย</div>
        <div class="col-3 text-blue">{{total}}{{currency}}</div>
        <div class="col-3 text-red">{{expense}}{{currency}}</div>
      </div>
    </q-card>

    <q-btn-dropdown label="ข้อมูลรายรับ - รายจ่ายในวันที่ 10/03/2020">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick()">
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img
                  src="https://image.flaticon.com/icons/svg/639/639365.svg"
                />
              </div>
              <div class="col-5 text-center text-blue" style="font-size:18px">รายรับ</div>
              <div class="col-5 text-center" style="font-size:18px">{{income}}{{currency}}</div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick()">
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img
                  src="https://image.flaticon.com/icons/svg/1086/1086741.svg"
                />
              </div>
              <div class="col-5 text-center text-red" style="font-size:18px">รายจ่าย</div>
              <div class="col-5 text-center" style="font-size:18px">{{expense}}{{currency}}</div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>

     <q-btn-dropdown label="ข้อมูลรายรับ - รายจ่ายในวันที่ 09/03/2020">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick()">
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img
                  src="https://image.flaticon.com/icons/svg/639/639365.svg"
                />
              </div>
              <div class="col-5 text-center text-blue" style="font-size:18px">รายรับ</div>
              <div class="col-5 text-center" style="font-size:18px">{{income}}{{currency}}</div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick()">
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img
                  src="https://image.flaticon.com/icons/svg/1086/1086741.svg"
                />
              </div>
              <div class="col-5 text-center text-red" style="font-size:18px">รายจ่าย</div>
              <div class="col-5 text-center" style="font-size:18px">{{expense}}{{currency}}</div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>


  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 150%
  max-width: 376px
  height: 40px

.top-center
  margin-top: 10px

.q-btn-dropdown
  width: 150%
  text-color: black

</style>
<!-- นางสาวพรไพลิน กล่อมจันทร์ และนางสาวพัทธนันท์ ชวลิตสุวรรณ์ [end] หน้า view ของหน้าที่สอง  -->

<script>
export default {
  name: "List",
  methods: {
    onItemClick() {
      console.log("click");
    }
  }
};
</script>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      total: "500.25",
      expense: "100.00",
      expense_today: "100.00",
      income: "1000.50",
      income_today: "1000.50",
      currency: "บาท",
      value: 10
    };
  }
};
</script>