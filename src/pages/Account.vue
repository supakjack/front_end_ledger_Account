<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <!-- <div class="row q-pa-sm bg-primary">
        <q-input
          @keyup.enter="addTask"
          class="col"
          square
          filled
          v-model="newTask"
          placeholder="เพิ่มรายการ"
          bg-color="white"
          dense
        >
          <template v-slot:append>
            <q-btn @click="addTask" round dense flat icon="add" />
          </template>
        </q-input>
      </div>-->

      <q-item
        clickable
        @click="task.done!=task.done"
        v-for="(task,index) in tasks"
        :key="index"
        tag="label"
        v-ripple
        :class="{'done bg-blue-1':task.done}"
      >
        <q-item-section avatar>
          <q-checkbox class="no-pointer-events" v-model="task.done" val="teal" color="teal" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.title}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done">
          <q-btn @click.stop="deleteTask(index)" flat round color="primary" icon="card_giftcard" />
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-pa-md" style="width: 100%" v-for="(item, index) in list_book" :key="index">
      <!-- <q-toggle v-model="expanded" label="Expanded" class="q-mb-md" /> -->

      <q-expansion-item
        v-model="expanded"
        icon="monetization_on"
        v-bind:label="list_book[index].lab_name"
        v-bind:caption="list_book[index].lab_amount+' '+list_book[index].lab_currency"
      >
        <q-card>
          <q-card-section>
            <q-item-section>รายละเอียดบัญชี</q-item-section>
            <br />
            <q-input filled v-model="list_book[index].lab_name" label="ชื่อบัญชี" />
            <br />
            <q-input filled type="text" v-model="list_book[index].lab_currency" label="สกุลเงิน" />

            <br />
            <br />

            <q-item-section>ประเภทบัญชี เงินสด</q-item-section>
            <br />
            <q-input filled type="number" v-model="list_book[index].lab_amount" label="ยอดเงินคงเหลือ" />

            <br />
          </q-card-section>
          <div class="q-pa-md" style="max-width: 1500px">
            <q-btn color="green" label="บันทึก" style="width: 100%" />
          </div>

          <div class="q-pa-md" style="max-width: 1500px">
            <q-btn color="red" label="ลบ" style="width: 100%" />
          </div>
        </q-card>
      </q-expansion-item>
    </div>

    <!-- end tab 1  -->
    <div class="q-pa-md q-gutter-sm" style="max-width: 1500px; margin-top :400px; ">
      <q-btn label="เพิ่มบัญชี" color="primary" style="width: 100%" @click="medium = true" />

      <q-dialog v-model="medium">
        <q-card style="width: 700px; max-width: 80vw;">
          <q-card-section>
            <div class="text-h6">เพิ่มบัญชี</div>
          </q-card-section>

          <q-card>
            <q-card-section>
              <q-item-section>รายละเอียดบัญชี</q-item-section>
              <br />
              <q-input filled type="text" v-model="name_regis" label="ชื่อบัญชี" />
              <br />
              <q-input filled type="text" v-model="money_regis" label="สกุลเงิน" />

              <br />
              <br />

              <q-item-section>ประเภทบัญชี เงินสด</q-item-section>
              <br />
              <q-input filled type="number" v-model="Total_money_regis" label="จำนวนเงิน (บาท)" />
            </q-card-section>
          </q-card>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn
              @click="add_acount()"
              color="green"
              label="ตกลง"
              style="width: 100%"
              v-close-popup
            />
            <br />
            <br />
            <br />
            <q-btn color="red" label="ยกเลิก" style="width: 100%" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>


<script>
import FacadeServices from "./../services/FacadeServices";
import $store from "../store/State";
const axios = new FacadeServices().makeAxios();

export default {
  name: "wxdwxwd",
  data() {
    return {
      name: "Supatchai gamaporn",
      money: "บาท",
      money_regis: " ",
      name_regis: " ",
      Total_money_regis: " ",
      medium: false,
      Total_money: "1000.50",
      list_book: [],
      expanded: false,
      book_names: [],
      newTask: "",
      // id_books: [],
      tasks: [
        // { title: "Get bananas", done: false },
        // { title: "Eat bananas", done: false },
        // { title: "Poo bananas", done: false }
      ]
    };
  },
  async mounted() {
    console.log("facebookId : " + $store.state.facebookId);

    console.log("testState from another component : " + $store.state.testState);
    //
    new axios().getHttp("books/1").then(result => {
      this.list_book = [];
      // this.id_books = [];
      //
      result.data.map((item, index) => {
        this.list_book.push(item);
        // this.id_books.push(item.lab_id);
        // console.log(this.id_books);
      });
      //
      // this.cleanList();
      //
      let tmpList_book = [];
      console.log(tmpList_book);
      for (let i = 0; i < this.list_book.length; i++) {
        if (i > 0) {
          tmpList_book.push(this.list_book[i]);
          let check = 0;

          for (let j = 0; j < tmpList_book.length; j++) {
            if (tmpList_book[j].lab_id == this.list_book[i].lab_id) {
              console.log("<--->");
              console.log(
                "  this.list_book[i].lab_id : " + this.list_book[i].lab_id
              );
              console.log(
                "  tmpList_book[j].lab_id  : " + tmpList_book[j].lab_id
              );
              check++;
              console.log("<--->");
            }
          }
          if (check > 1) {
            tmpList_book.splice(tmpList_book.length - 1, 1);
          }
        } else {
          tmpList_book.push(this.list_book[i]);
        }
      }
      this.list_book = tmpList_book;
      //
    });
    //
  },
  methods: {
    // cleanList() {
    //   this.id_books = Array.from(new Set(this.id_books));
    //   // let tmpList_book = [];
    //   // console.log(tmpList_book);
    //   // for (let i = 0; i < this.list_book.length; i++) {
    //   //   if (i > 0) {
    //   //     tmpList_book.push(this.list_book[i]);
    //   //     let check = 0;

    //   //     for (let j = 0; j < tmpList_book.length; j++) {
    //   //       if (tmpList_book[j].lab_id == this.list_book[i].lab_id) {
    //   //         console.log("<--->");
    //   //         console.log(
    //   //           "  this.list_book[i].lab_id : " + this.list_book[i].lab_id
    //   //         );
    //   //         console.log(
    //   //           "  tmpList_book[j].lab_id  : " + tmpList_book[j].lab_id
    //   //         );
    //   //         check++;
    //   //         console.log("<--->");
    //   //       }
    //   //     }
    //   //     if (check > 1) {
    //   //       tmpList_book.splice(tmpList_book.length - 1, 1);
    //   //     }
    //   //   } else {
    //   //     tmpList_book.push(this.list_book[i]);
    //   //   }
    //   // }
    //   console.log(tmpList_book);
    // },
    // getAmount(id) {
    //   return id;
    // },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      });
      this.newTask = "";
    },
    add_acount() {
      let new_acount = {
        name: this.name_regis,
        amount: this.Total_money_regis,
        currency: this.money_regis,
        id: 1
      };
      console.log(new_acount);
      new axios().postHttp("books", new_acount).then(result => {
        console.log(result);
      });
      this.mounted;
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete",
          cancel: true,
          persisten: true
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify("Task delete");
        });
    }
  }
};
</script>


<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbbbbb;
  }
}
.no-task {
  opacity: 0.5;
}
</style>