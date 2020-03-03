<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md q-gutter-sm">
    <q-banner class="bg-grey-3">
      <p style="text-align:left;">
      <div>วันนี้</div>
      <div>19 กุมภาพันธ์ 2020</div>
    <span style="float:right;">
        <button style="border:1px solid transparent; background-color: transparent;">
        <i class="material-icons" style="font-size:40px">
          keyboard_arrow_right
        </i>
      </button>
    </span>
    </q-banner>
    <q-banner class="bg-red-3">
      <p style="text-align:left;">
    <i class="material-icons" style="color:red"><div style="font-size:25px">local_grocery_store</div></i>รายจ่าย
    <span style="float:right;">
        <p align="right">100.00 บาท</p>
    </span>
    </p>
    </q-banner>
    <q-banner class="bg-green-3">
      <p style="text-align:left;">
    <i class="material-icons" style="color:green"><div style="font-size:25px">local_atm</div></i>รายรับ
    <span style="float:right;">
        <p align="right">1000.50 บาท</p>
    </span>
    </p>
    </q-banner>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <div align="center">
        <q-btn
          size="12px"
          class="q-px-xl q-py-xs"
          color="red"
          label="รายจ่าย"
        />
        <q-btn
          size="12px"
          class="q-px-xl q-py-xs"
          color="green"
          label="รายรับ"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
