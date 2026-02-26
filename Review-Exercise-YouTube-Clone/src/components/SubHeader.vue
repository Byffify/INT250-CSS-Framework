<script setup>
</script>

<template>
  <section class="w-full border-t border-gray-200">
    <div class="max-w-7xl mx-auto py-8 border-b border-gray-200">
      <div class="flex gap-7">
        <div class="w-[424px] aspect-video">
          <!-- <iframe> คือ แท็ก HTML ที่ใช้แสดงเว็บหรือเนื้อหาจากเว็บไซต์อื่นภายในหน้าเว็บของเรา -->
          <iframe
            class="rounded-xl w-full h-full"
            src="https://www.youtube.com/embed/A0jec7lUUDw"
            allowfullscreen
          >
          </iframe>
        </div>
        <div class="gap-3 flex flex-col">
          <p class="truncate w-[400px] font-medium text-sm">
            นักศึกษาไอทีบางมด ร่วมทีม Astronut
            คว้าแชมป์เขียนโปรแกรมคุมหุ่นยนต์ผู้ช่วยนักบินอวกาศของ NASA
          </p>
          <div class="flex gap-2">
            <p class="text-gray-500 text-sm font-medium">การดู 222 ครั้ง</p>
            <p class="text-gray-500 text-sm font-medium">•</p>
            <p class="text-gray-500 text-sm font-medium">11 เดือนที่ผ่านมา</p>
          </div>
          <div>
            <p class="line-clamp-7 w-[400px] font-medium text-sm">
              น้องบีบี สิรวิชญ์ แพร่วิศวกิจ นักศึกษาชั้นปีที่ 1
              สาขาวิชาเทคโนโลยีสารสนเทศ SIT KMUTT ร่วมทีม แอสโทรนัต (Astronut)
              พร้อมด้วยสมาชิก 3 คน คว้ารางวัลชนะเลิศรอบชิงแชมป์ระดับประเทศ จาก
              13 ประเทศทั่วโลก ในการแข่งขัน Kibo Robot Programming Challenge
              เป็นการแข่งขันเขียนโปรแกรมคอมพิวเตอร์เพื่อควบคุมหุ่นยนต์ Astrobee
              หุ่นยนต์ผู้ช่วยนักบินอวกาศของ NASA
              ให้ปฏิบัติภารกิจบนสถานีอวกาศตามที่วางแผนไว้ ณ ศูนย์อวกาศสึคุบะ
              องค์การสำรวจอวกาศญี่ปุ่น หรือ JAXA
            </p>
            <button class="text-xs text-gray-500 hover:cursor-pointer font-medium">อ่านเพิ่มเติม</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
