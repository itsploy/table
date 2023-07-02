// เมื่อฟอร์มถูกส่ง
document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อกด Submit

  // อ่านข้อมูลจากฟอร์ม
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var partySize = document.getElementById('party-size').value;

  // ส่งข้อมูลไปยังเซิร์ฟเวอร์ (ส่วนนี้จะเป็นการใช้งาน API หรือเทคโนโลยีอื่น ๆ ที่เกี่ยวข้องกับระบบของคุณ)

  // แสดงผลลัพธ์
  var resultElement = document.getElementById('booking-result');
  resultElement.innerHTML = 'ขอบคุณสำหรับการจองโต๊ะ ' + name + '! โต๊ะของคุณได้จองเรียบร้อยแล้ว';
});
