import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxx",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxx"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export const insertRetiros = (nombre, cuenta, cantidadUSD, cantidadARS, caja) => {
    push(ref(db,"Retiros/"),{
      Nombre: nombre,
      Cuenta: cuenta,
      CantidadUSD: cantidadUSD,
      CantidadARS: cantidadARS,
      Caja: caja,
    })
    .then(()=> {
      console.log("Datos guardados")
    })
    .catch((error)=>{
      console.log(error)
    });
  }