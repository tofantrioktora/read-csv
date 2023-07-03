// membuat objek XMLHttpRequest
let xhr = new XMLHttpRequest();

// membuat GET request ke file CSV
xhr.open('GET', 'data.csv', true);

// mengatur tipe respon yang diharapkan
xhr.responseType = 'text';

// menangani ketika respon diterima
xhr.onload = function() {
    if (xhr.status === 200) {
        // memisahkan baris pada file CSV
        let rows = xhr.responseText.split('\n');

        // mengisi tabel dengan data dari file CSV
        let table = document.getElementById('data-table').getElementsByTagName('tbody')[0];

        for (let i = 1; i < rows.length; i++) {
            let cells = rows[i].split(',');
            let row = table.insertRow();

            for (let j = 0; j < cells.length; j++) {
                let cell = row.insertCell();
                cell.innerHTML = cells[j];
            }
        }
    } else {
        console.log('Gagal memuat file CSV');
    }
};

// menangani ketika terjadi error
xhr.onerror = function() {
    console.log('Terjadi error saat memuat file CSV');
};

// mengirimkan request
xhr.send();