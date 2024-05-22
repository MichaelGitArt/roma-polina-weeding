<template>
  <div>
    <div class="min-h-[calc(100vh-100px)] flex flex-col gap-6 justify-center pb-5 pt-5 px-6 relative">
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
        6 липня 16:00 (Субота)

        <br>

        <a href="https://maps.app.goo.gl/UNQeaynTRkzLQfz67" class="underline mb-7 block">м. Вишневе, Ломоносова 3</a>

        <VBtn
          href="https://docs.google.com/forms/d/e/1FAIpQLScW3BPuTNNE-2uMuGqVNwj1r_y37LLHsOMTaTjEZOmXy3R5WQ/viewform"
          color="#C2A4A1"
          size="large"
          variant="flat"
        >
          Підтвердити присутність
        </VBtn>
      </div>

      <!-- <div class="image-box">
        <img src="/roma-losha.png" alt="">
      </div> -->
    <!-- <img src="/roma-fun.png" alt=""> -->
    </div>

    <VContainer class="pt-5 pb-30 px-6 text-xl">
      <div class="text-4xl mb-10 text-center font-semibold">
        День нашого святкування
      </div>

      <div class="text-left">
        <p class="mb-10">
          Привіт) Ми хочемо запросити вас на наше весілля. Для нас це дуже важливий день, до якого ми йшли кілька років. Тож ми будемо щасливі провести разом із вами день і вечір святкування нашого возз'єднання.
        </p>

        <p class="mb-10">
          Ми познайомились у 2019 році, коли доєднались до Київської команди Кемпуса. Дружили 2 роки, а зустрічатись почали у 2021. А потім - війна, яка стала початком стосунків на відстані.
        </p>

        <p class="mb-10">
          Дивно, думати про це, але на відстані ми провели більше двох років. Поліна приїжджала з Канади в кінці семестру на кілька тижнів і знову їхала. В останній такий її приїзд Ромі увірвався терпець і він зробив їй пропозицію нікуди більше не їхати від нього. Поля сказала “Так” - і поїхала ще на рік… Але скоро вона повернеться, і ми будемо разом вже надовго.
        </p>

        <div class="border border-tw-primary shadow shadow-xl rounded-lg py-5 px-5 mb-10">
          <p class="mb-4 font-semibold text-center">
            Будь ласка, підтвердіть свою присутність на весіллі до 8 червня 
          </p>

          <div class="text-center">
            <VBtn
              href="https://docs.google.com/forms/d/e/1FAIpQLScW3BPuTNNE-2uMuGqVNwj1r_y37LLHsOMTaTjEZOmXy3R5WQ/viewform"
              color="#C2A4A1"
              size="large"
              variant="flat"
            >
              Підтвердити присутність
            </VBtn>
          </div>
        </div>
      </div>

      <div class="text-center">
        <p class="mb-2">
          Ми будемо раді якщо ви вдягнете одяг за кольорами нашого весілля:
        </p>

        <img
          src="/colors.png"
          class="w-100 mx-auto"
        >
      </div>
    </VContainer>
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
