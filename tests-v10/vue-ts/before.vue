<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

  const emits = defineEmits(["update", "delete", "refresh", "submit"])
    var userData = ref({
    name: "John Doe",
      age: 30,
    role: "admin",
     preferences: {
        theme: "dark",
        notifications: true,
        newsletter: false
    },
    history: [
      { id: 1, action: "login", timestamp: "2023-01-01" },
      { id: 2, action: "view", timestamp: "2023-01-02" },
       { id: 3, action: "logout", timestamp: "2023-01-03" }
    ]
  })

var tableHeaders: string[] = [
    "ID",
  "Action",
     "Timestamp",
  "Status",
  "Details",
   "User Agent",
  "IP Address"
]

   const props = defineProps({
    isAdmin: Boolean,
     config: Object
   })

function calculateStats() {
    console.log("calculating stats...")
  var total = 0
   for(var i=0; i<userData.value.history.length; i++) {
     total = total + 1
   }
   return total;
}

  const toggleNotification = () => {
      if(userData.value.preferences.notifications == true) {
      userData.value.preferences.notifications = false
    } else {
       userData.value.preferences.notifications = true
    }
  }

const complexLogic = computed(() => {
  if (userData.value.role == 'admin') {
     return true
  }
   else if (userData.value.age > 18) {
    return true
  } else {
     return false;
  }
})

function submitForm() {
  var payload = {
    user: userData.value,
    timestamp: new Date()
  }
  
    fetch("https://api.example.com/submit", {
      method: "POST",
    body: JSON.stringify(payload)
  }).then(res => {
      console.log(res)
    })
}

var tempVar = "unused variable"
let anotherUnused = 123

  onMounted(() => {
    setTimeout(function() {
      userData.value.age = 31
    }, 1000)
  })

const reset = () => { userData.value.name = ""; userData.value.age = 0; }

</script>
<template>
  <div class="dashboard-wrapper" style="padding: 20px; font-family: Arial;">
    <div :class="[{ 'header': true }, 'main-header']" style="border-bottom: 1px solid #ccc; margin-bottom: 20px;">
       <h1>{{ "User Dashboard" }}</h1>
      <p v-if="props.isAdmin == true">Welcome, Administrator. You have full access.</p>
       <span v-else>Welcome, User. Read only mode.</span>
    </div>

    <div class="stats-bar" style="display: flex; gap: 15px; background: #f0f0f0; padding: 10px;">
      <div class="stat-item">
         <strong>Total Actions:</strong> {{ calculateStats() }}
      </div>
      <div class="stat-item">
        <strong>Role:</strong> {{ userData.role }}
       </div>
      <div class="stat-item">
        <strong>Status:</strong>
         <span v-if="userData.preferences.notifications" style="color: green;">Active</span>
        <span v-else style="color: red;">Inactive</span>
      </div>
    </div>

    <hr>

    <div class="user-form" style="margin-top: 30px;">
      <h2>{{ "Edit Profile" }}</h2>
       <form @submit.prevent="submitForm">
        <div class="form-group" style="margin-bottom: 15px;">
          <label>Name:</label>
           <input type="text" v-model="userData.name" style="width: 100%; padding: 5px;" />
        </div>

        <div class="form-group" style="margin-bottom: 15px;">
           <label>Age:</label>
          <input type="number" v-model="userData.age" style="width: 100%; padding: 5px;" />
        </div>

        <div class="form-group" style="margin-bottom: 15px;">
          <label>Theme:</label>
           <select v-model="userData.preferences.theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
             <option value="auto">Auto</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom: 15px;">
          <label>Notifications:</label>
           <button type="button" @click="toggleNotification">
            {{ userData.preferences.notifications ? "Disable" : "Enable" }}
          </button>
        </div>

         <div class="form-actions">
          <button type="submit" style="background: blue; color: white; padding: 10px 20px;">Save Changes</button>
          <button type="button" @click="reset" style="margin-left: 10px;">Reset</button>
        </div>
      </form>
    </div>

    <div class="history-section" style="margin-top: 40px;">
       <h3>History Log</h3>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th v-for="header in tableHeaders">
               {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
           <tr v-for="item in userData.history">
            <td>{{ item.id }}</td>
             <td>{{ item.action }}</td>
            <td>{{ item.timestamp }}</td>
            <td>
              <span v-if="item.action == 'login'" style="font-weight: bold;">
                Success
              </span>
               <span v-else>
                Completed
              </span>
            </td>
            <td>-</td>
             <td>Mozilla/5.0</td>
            <td>192.168.1.1</td>
          </tr>
          <tr>
            <td>4</td>
             <td>manual_entry</td>
            <td>2023-01-04</td>
            <td>Pending</td>
             <td>-</td>
            <td>Unknown</td>
            <td>127.0.0.1</td>
          </tr>
           <tr>
            <td>5</td>
            <td>system_check</td>
             <td>2023-01-05</td>
            <td>Failed</td>
            <td>Error 500</td>
             <td>Bot</td>
            <td>10.0.0.1</td>
          </tr>
        </tbody>
      </table>
    </div>

     <div class="footer" style="margin-top: 50px; text-align: center; color: #888;">
      <p>Copyright 2023</p>
      <a href="https://twitter.com" target="_blank">Twitter</a> | 
       <a href="https://facebook.com" target="_blank">Facebook</a> |
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </div>

    <div v-if="false">
      This is dead code in the template
       <span>Hidden</span>
    </div>

     <div class="debug-info">
      <pre>{{ JSON.stringify(userData, null, 2) }}</pre>
    </div>
  </div>
</template>