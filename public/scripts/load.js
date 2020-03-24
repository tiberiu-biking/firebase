var firebaseConfig = {
    apiKey: "AIzaSyD6uk6in9FbX3g_IkTovkiqeQEWEVLGpAc",
    authDomain: "peaks-jager.firebaseapp.com",
    databaseURL: "https://peaks-jager.firebaseio.com",
    projectId: "peaks-jager",
    storageBucket: "peaks-jager.appspot.com",
    messagingSenderId: "179126751692",
    appId: "1:179126751692:web:1bedae5af985db5b0b0d69"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();

var table = document.querySelector('#table1 tbody');


database.collection("peaks").get().then(
    (snapshot) => {

        // clear the table
        while (table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }

        snapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);

            var row = table.insertRow(-1);

            let cell;
            for (var i in doc.data()) {
                cell = row.insertCell(-1);
                cell.innerHTML = doc.data()[i];
            }
        })
    });