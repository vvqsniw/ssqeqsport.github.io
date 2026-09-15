/**
 * auth.js
 * -----------------------------------------------------------------
 * ตรวจสอบว่าเบราว์เซอร์นี้เคยสมัครสมาชิกไว้แล้วหรือยัง (เก็บรหัสสมาชิกไว้ใน localStorage)
 * - ถ้ายังไม่เคย -> พาไปหน้า register.html เพื่อสมัครก่อน
 * - ถ้าเคยแล้ว -> ตั้งค่า CURRENT_MEMBER_ID ให้ทุกหน้าใช้งานต่อได้
 *
 * ต้องใส่ <script src="auth.js"></script> เป็น "ไฟล์แรกสุด" ก่อน sheetdb-api.js และ script.js
 * ในทุกหน้า ยกเว้น register.html
 * -----------------------------------------------------------------
 */

const MEMBER_ID_KEY = "currentMemberId";
const CURRENT_MEMBER_ID = localStorage.getItem(MEMBER_ID_KEY);

if (!CURRENT_MEMBER_ID) {
  window.location.href = "register.html";
}

/** ออกจากระบบ / สลับไปสมัครหรือเข้าใช้ด้วยบัญชีอื่น (ใช้กรณีเครื่องคอมพิวเตอร์ใช้ร่วมกันหลายคน) */
function switchUser() {
  if (!confirm("ต้องการออกจากระบบผู้ใช้ปัจจุบัน เพื่อสมัคร/สลับเป็นบัญชีอื่นใช่หรือไม่?")) return;
  localStorage.removeItem(MEMBER_ID_KEY);
  window.location.href = "register.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("switchUserLink");
  if (link) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchUser();
    });
  }
});
