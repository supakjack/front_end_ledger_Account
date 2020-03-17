<!-- นางสาวพรไพลิน กล่อมจันทร์ และนางสาวพัทธนันท์ ชวลิตสุวรรณ์ [start] หน้า view ของหน้าที่สอง -->
<template>
  <div class="q-pa-md row items-start q-gutter-md">
  <!-- <q-card class="my-card"> -->
      <!-- <div class="row top-center">
        <div class="col-5 text-center">สรุปรายรับ - รายจ่าย</div>
        <div class="col-3 text-blue">{{total}}{{currency}}</div>
        <div class="col-3 text-red">{{expense}}{{currency}}</div>
      </div> -->
    <!-- </q-card> -->

    <q-btn-dropdown
      v-for="(item, index) in list_data"
      :key="index"
      v-bind:label="'ข้อมูลรายรับ - รายจ่ายในวันที่ '+item.lal_timestamp.substr(0,10)"
    >
      <q-list>
        <q-item clickable>
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img src="https://image.flaticon.com/icons/svg/639/639365.svg" />
              </div>
              <div class="col-5 text-center text-blue" style="font-size:18px">รายรับ</div>
              <div class="col-5 text-center" style="font-size:18px">{{item.lab_income}}{{currency}}</div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img src="https://image.flaticon.com/icons/svg/1086/1086741.svg" />
              </div>
              <div class="col-5 text-center text-red" style="font-size:18px">รายจ่าย</div>
              <div class="col-5 text-center" style="font-size:18px">{{item.lab_expense}}{{currency}}</div>
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
import $store from "../store/State";
import FacadeServices from "./../services/FacadeServices";
const axios = new FacadeServices().makeAxios();

export default {
  //เป็นการเรียกใช้ service จาก getHTTP เข้าไปใน result ผ่านตัว call back function
  mounted() {
    new axios().getHttp("books/income/2/now").then(result => {
      result.data.map((item, index) => {
        console.log(item);
        this.income_today = item.income;
      });
    });

    new axios().getHttp("books/expense/2/now").then(result => {
      result.data.map((item, index) => {
        console.log(item);
        this.expense_today = item.expense;
      });
    });

    new axios().getHttp("books/1").then(result => {
      this.list_data = [];
      // this.id_books = [];
      //
      //map = กรเข้าถึงค่าแต่ละตัว
      result.data.map((item, index) => {
        // item.lal_timestamp =  item.lal_timestamp.substr(0, 10);
        console.log(item.lal_timestamp);
        console.log(item);
        if (item.lal_timestamp != null) {
          this.list_data.push(item);
        }
        // this.id_books.push(item.lal_timestamp);
        // console.log(this.id_books);
      });

      //เป็นตัวแปรกำหนดเทียบค่า listdata ค่าที่ออก2วันและ interfaceค่าที่แสดงทั้งหมดแต่ไม่มี null
      let interface_list_data = this.list_data;
      //
      // this.cleanList();
      //
      let tmpList_book = [];
      console.log(tmpList_book);
      for (let i = 0; i < this.list_data.length; i++) {
        if (i > 0) {
          tmpList_book.push(this.list_data[i]);
          let check = 0;

          for (let j = 0; j < tmpList_book.length; j++) {
            // console.log(tmpList_book[j]);
            if (
              tmpList_book[j].lal_timestamp.substr(0, 10) ==
              this.list_data[i].lal_timestamp.substr(0, 10)
            ) {
              console.log("<--->");
              console.log(
                "  this.list_data[i].lal_timestamp.substr(0, 10) : " +
                  this.list_data[i].lal_timestamp.substr(0, 10)
              );
              console.log(
                "  tmpList_book[j].lal_timestamp .substr(0, 10) : " +
                  tmpList_book[j].lal_timestamp.substr(0, 10)
              );
              check++;
              console.log("<--->");
            }
          }

          //เป็นการเช็คว่า ถ้ามี1ตัวไม่ซ้ำ ถ้ามากกว่า1คือไม่ซ้ำ ถ้าซ้ำต้องตัดออก
          if (check > 1) {
            tmpList_book.splice(tmpList_book.length - 1, 1);
          }
        } else {
          tmpList_book.push(this.list_data[i]);
        }
      }
      this.list_data = tmpList_book;

      //กำหนดค่าเริ่มต้นของ income ,expense เป็น 0 ก่อน
      for (let i = 0; i < this.list_data.length; i++) {
        if (i == 0) {
          this.list_data[i].lab_income = 0;
          this.list_data[i].lab_expense = 0;
        }
        for (let j = 0; j < interface_list_data.length; j++) {
          if (
            this.list_data[i].lal_timestamp.substr(0, 10) ==
            interface_list_data[j].lal_timestamp.substr(0, 10)
          ) {

            //check type 1 and 2
            if (interface_list_data[j].lal_type == 1) {
              this.list_data[i].lab_income += interface_list_data[j].lal_money;
            } else {
              this.list_data[i].lab_expense += interface_list_data[j].lal_money;
            }
          }
        }
      }
      console.log(this.list_data);
    });

    new axios().getHttp("books/1").then(result => {
      this.list_list = [];
      // this.id_lists = [];
      //
      result.data.map((item, index) => {
        this.list_list.push(item);
        // this.id_lists.push(item.lab_id);
        // console.log(this.id_lists);
      });

      let tmpList_list = [];
      console.log(tmpList_list);
      for (let i = 0; i < this.list_list.length; i++) {
        if (i > 0) {
          tmpList_list.push(this.list_list[i]);
          let check = 0;

          for (let j = 0; j < tmpList_list.length; j++) {
            if (tmpList_list[j].lab_id == this.list_list[i].lab_id) {
              console.log("<--->");
              console.log(
                "  this.list_list[i].lab_id : " + this.list_list[i].lab_id
              );
              console.log(
                "  tmpList_list[j].lab_id  : " + tmpList_list[j].lab_id
              );
              check++;
              console.log("<--->");
            }
          }
          if (check > 1) {
            tmpList_list.splice(tmpList_list.length - 1, 1);
          }
        } else {
          tmpList_list.push(this.list_list[i]);
        }
      }
      this.list_list = tmpList_list;
      //
    });
    //
  },
  data() {
    return {
      total: "0",
      expense: "0",
      expense_today: "0",
      income: "0",
      income_today: "0",
      currency: " ",
      list_data: "",
      value: 10
    };
  },
  methods: {}
};
</script>
