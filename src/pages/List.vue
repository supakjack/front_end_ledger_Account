<template>
  <q-card class="my-card">
    <q-btn>
      <q-card-actions vertical>
        <div class="row">
          <div class="col-5">วันนี้ 19/02/20</div>
          <div class="col-3">1000.50 บาท</div>
          <div class="col-3">-100.00 บาท</div>
          <i class="material-icons icon1-size">keyboard_arrow_up</i>
        </div>
      </q-card-actions>
    </q-btn>

    <div class="row">
      <div class="col-5">
        <q-icon name="img:statics/icon/iconfinder-basket-4341280_120547.png"/>
      </div>
      <div class="col-3">รายจ่าย</div>
      <div class="col-3">-100.00 บาท</div>
    </div>
    <div class="row">
      <div class="col-5">
        <q-img
          src="https://cdn.icon-icons.com/icons2/1153/PNG/512/1486564172-finance-loan-money_81492.png"
          
        />
      </div>
      <div class="col-3">1000.50 บาท</div>
      <div class="col-3">-100.00 บาท</div>
    </div>
  </q-card>
</template>

<style>
.icon-size {
  font-size: 30px;
}
.icon1-size {
  font-size: 20px;
}
.row {
  margin-top: 10px;
}
</style>