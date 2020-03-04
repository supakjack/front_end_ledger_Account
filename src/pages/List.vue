<!-- นางสาวพรไพลิน กล่อมจันทร์ และนางสาวพัทธนันท์ ชวลิตสุวรรณ์ [start] หน้า view ของหน้าที่สอง -->
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <div class="row top-center">
        <div class="col-5 text-center">สรุปรายรับ - รายจ่าย</div>
        <div class="col-3 text-blue">1000.50 บาท</div>
        <div class="col-3 text-red">-100.00 บาท</div>
      </div>
    </q-card>

    <q-btn-dropdown label="ข้อมูลรายรับ - รายจ่ายในวันที่ 19/02/2020">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img
                  src="https://lh3.googleusercontent.com/proxy/eBHN96qawDXZoVj02USh-syljsjuHein5cNu9wH7FrimxI1hSc4zoa5Yrs7-WvJ2dd1LhgHQz3M5LMwydVEgh_NeK0xojvsxe-i_9dTWHjnRG8j2jhYYFO592Ax1UW9gvwMUzvTj-OOSriXJs5B4SwOJUSpfCKR3nD_EoPjO_JCJZiyvvg"
                />
              </div>
              <div class="col-5 text-center">รายรับ</div>
              <div class="col-5 text-center">1000.50 บาท</div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <div class="row top-center">
              <q-item-label></q-item-label>
              <div class="col-1">
                <q-img
                  src="https://cdn.icon-icons.com/icons2/1153/PNG/512/1486564172-finance-loan-money_81492.png"/>
              </div>
              <div class="col-5 text-center">รายจ่าย</div>
              <div class="col-5 text-center">-100.00 บาท</div>
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
  name : "List",
  methods: {
    onItemClick(){
      console.log("click")
    }
  },
}
</script>