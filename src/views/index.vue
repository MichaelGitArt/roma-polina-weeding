<script setup lang="ts">

</script>

<template>
  <div>
    <div class="min-h-[calc(100vh-100px)] flex flex-col gap-6 justify-center pb-20 pt-20 px-6 relative">
      <img
        src="/bg-top-right.png"
        class="absolute top-0 right-0 max-w-[34%]"
      >

      <img
        src="/bg-top-left.png"
        class="absolute top-0 left-0 max-w-[34%]"
      >

      <div class="relative z-10">
        <div class="main-circle">
          <div class="text-5xl font-semibold text-center mb-7 font-fancy flex items-end">
            Роман <span class="text-xl px-3"> & </span> Поліна
          </div>

          <div class="text-3xl font-semibold text-center font-fancy">
            6 Липня 2024
          </div>
        </div>
      </div>

      <div class="text-2xl font-semibold text-center mb-10 text-tw-primary">
        6 липня 17:00 (Субота)

        <br>

        <a href="https://maps.app.goo.gl/UNQeaynTRkzLQfz67" class="underline">м. Вишневе, Ломоносова 3</a>
      </div>

      <!-- <div class="image-box">
        <img src="/roma-losha.png" alt="">
      </div> -->
    <!-- <img src="/roma-fun.png" alt=""> -->
    </div>

    <div class="pt-10 pb-30 px-6 text-lg">
      <div class="text-4xl mb-10 text-center font-semibold">
        Раді вас бачити
      </div>

      <div class="text-center">
        <p class="mb-20">
          Будь ласка, підтвердіть cвою присутність до 30 травня.
        </p>

        <p>
          Ми будемо раді якщо ви вдягнете одяг за кольорами нашого весілля:
        </p>

        <img
          src="/colors.png"
          class="w-100 mx-auto"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-circle {
  @apply
    mx-auto
    text-tw-primary
    flex flex-col items-center justify-center
    w-96 max-w-[90%]
    px-10
    aspect-square
    rounded-full
    bg-[#c2a4a1]
    ;
    // bg-tw-secondary
    // bg-[#c2a4a1]

}

.image-box {
  border-radius: 0 0 30px 30px;
  @apply
    relative overflow-hidden
  ;

  &::after {
    @apply
      content-empty
      h-28
      left-0 top-0 right-0
      absolute
      z-20
    ;

    background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
}
</style>
