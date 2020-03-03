<template>
  <q-page padding>
    <!-- content -->

   <br><br><br> 
  <!-- start icon Piggy bank -->
  <div class="q-pa-md">
   <div class="q-col-gutter-md row items-start">
    <!-- start col 1-->  
     <div class="col-4"></div>
    <!-- end col 1-->

    <!-- start col 2-->  
      <div class="col-4" style="width:35%">
        <q-img 
          src="https://image.flaticon.com/icons/svg/1660/1660899.svg"
          :ratio="1"
       />
      </div>
    <!-- end col 2-->  
  
    <!-- start col 3 -->  
      <div class="col-4"></div>
     <!-- end col 3 --> 
    </div>
  </div>
  <!-- end icon Piggy bank -->

  <div style="font-size:20px ">
    <center><font color="#6495ED"><b style="font-family:cursive;">Piggy Pocket </b></font></center>
  </div>
 
  <!-- strat input username -->
  <center>
  <div class="q-pa-md" >
      <div class="q-gutter-md" style="max-width: 300px; font-family:cursive; ">
        <q-input rounded outlined v-model="text" label= " Username"  />
      </div>
  </div>
  </center>
  <!-- end input username -->

   <!-- strat input password -->
  <center>
  <div class="q-pa-md" >
      <div class="q-gutter-md" style="max-width: 300px; font-family:cursive;">
        <q-input rounded outlined v-model="text" label=" Password" />
      </div>
  </div>
  </center>
  <!-- end input password -->

  <!-- start button login -->
  <center>
  <div class="q-pa-md q-gutter-sm">
    <b><q-btn class="glossy" style="font-family:cursive; font-size:16px;" rounded color="green-13" label=" LOG IN "/></b>
  </div>
  </center>                              
  <!-- end button login -->

  </q-page>  
</template>

<script>
export default {
  name: 'Authen',
    data: function () {
    return {
      text: ''
    }
  }

}
</script>
