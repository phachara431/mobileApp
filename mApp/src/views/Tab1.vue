<template>
  <section>
    <img :src="picture" :width="size" :height="size" ref="imageEl" /><br />
    <h1>ชื่อ-นามสกุล : {{ getFullName }}</h1>
    <h1>อายุ : {{ age }} ปี</h1>
    
    <h1>อาชีพ : {{getDepartment}}</h1>
    
    <button @click="toggleVisible">{{ isVisible ? "ซ่อน" : "แสดง"}}รายละเอียด</button>
    <article v-show="isVisible">
      <p>ที่อยู่ : <span v-html="address"></span></p>
      <p>Social : <a :href="social" target="_blank">Facebook</a></p>
      <p v-if="hobby.length === 0">ไม่มีงานอดิเรก</p>
      <div v-else>
        <p>งานอดิเรก :</p>
        <ul>
          <li v-for="(item, index) in hobby" :key="index">{{ item }}</li>
        </ul>
      </div>
      <p>ข้อมูลพื้นฐาน :</p>
      <ul>
        <li v-for="(item, key) in general" :key="key">{{ item }}</li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Phatcharamani",
      lastName: "Ketkhuang",
      age: 21,
      address: "<i>นครราชสีมา</i>",
      picture:"https://scontent.fphs2-1.fna.fbcdn.net/v/t39.30808-6/269979796_3029054714010343_4175855293601035771_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFHOwhiECd0zrY4mZ67vmUjk48CDQyP_J6TjwINDI_8nv-WG3W159IfE8nWQLuQbIji-JWDC-0zNjvs5QjkKW8W&_nc_ohc=g8iH2c2SVbsAX85Ga8r&_nc_ht=scontent.fphs2-1.fna&oh=00_AT9w4hYambpy-muMhcSMFBzBbkiAv5CkeBY52YMzJNc0zw&oe=621A459F",
      size: 150,
      social: "https://www.facebook.com/profile.php?id=100007175322432",
      hobby: [
        "ดูหนัง",
        "ฟังเพลง",
        "เล่นกีต้าร์",
        
      ],
      general: { gender: "หญิง", weight: 92, height: 160, status: false },
      isVisible:false,
      
    };
  },
  methods: {
    toggleVisible(){
        this.isVisible = !this.isVisible
    },
    addSalary(value){
        this.salary+=value
    }
  },
  computed:{
    getFullName() {
        return `${this.firstName}  ${this.lastName}`;
    },
    getIncome(){
        return this.salary * 12;
    },
    getDepartment(){
        return this.salary >=35000 ? "Project manager" : "นักศึกษา"
    }
  },
  
  
};
</script>

<style></style>