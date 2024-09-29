// Mendapatkan elemen-elemen form
const form = document.getElementById('Form');
const nameInput = document.getElementById('Name');
const emailInput = document.getElementById('Email');
const phoneInput = document.getElementById('Telp');
const messageInput = document.getElementById('Mess');

// Menambahkan event listener pada saat form disubmit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form dari pengiriman default

  // Memanggil fungsi validasi untuk setiap input
  if (validateName() && validateEmail() && validatePhone() && validateMessage()) {
    form.submit(); // Jika semua input valid, form dikirim
  }
});

// Fungsi validasi Nama
function validateName() {
  const nameValue = nameInput.value.trim();

  if (nameValue === '') {
    alert('Silakan masukkan Nama Anda');
    return false;
  }

  // Validasi hanya huruf dan spasi
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(nameValue)) {
    alert('Nama hanya boleh mengandung huruf dan spasi');
    return false;
  }

  return true;
}

// Fungsi validasi Email
function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    alert('Silakan masukkan Email Anda');
    return false;
  }

  // Validasi format Email menggunakan regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    alert('Silakan masukkan Email yang valid');
    return false;
  }

  return true;
}

// Fungsi validasi Telepon
function validatePhone() {
  const phoneValue = phoneInput.value.trim();

  if (phoneValue === '') {
    alert('Silakan masukkan Nomor Telepon Anda');
    return false;
  }

  // Validasi hanya angka
  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phoneValue)) {
    alert('Nomor Telepon hanya boleh mengandung angka');
    return false;
  }

  return true;
}

// Fungsi validasi Pesan
function validateMessage() {
  const messageValue = messageInput.value.trim();

  if (messageValue === '') {
    alert('Silakan masukkan Pesan Anda');
    return false;
  }

  // Validasi hanya alfanumerik (huruf dan angka)
  const messageRegex = /^[a-zA-Z0-9\s]+$/;
  if (!messageRegex.test(messageValue)) {
    alert('Pesan hanya boleh mengandung huruf, angka, dan spasi');
    return false;
  }

  return true;
}
