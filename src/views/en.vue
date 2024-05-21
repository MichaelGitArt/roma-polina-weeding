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
            Roman <span class="text-xl px-3"> & </span> Polina
          </div>

          <div class="text-3xl font-semibold text-center font-fancy">
            July 6, 2024
          </div>
        </div>
      </div>

      <div class="text-2xl font-semibold text-center mb-10 text-tw-primary">
        Saturday, July 6, 7 AM (MDT)

        <br>

        <VBtn
          href="https://docs.google.com/forms/d/1pHRBHJsEM89AfvoJ9zDVw7bFjfXb_aAAMEBg_TStoSE/edit?pli=1"
          color="primary"
          size="large"
          variant="flat"
        >
          Confirm attendance
        </VBtn>
      </div>

      <!-- <div class="image-box">
        <img src="/roma-losha.png" alt="">
      </div> -->
    <!-- <img src="/roma-fun.png" alt=""> -->
    </div>

    <VContainer class="pt-5 pb-30 px-6 text-xl">
      <div class="text-4xl mb-10 text-center font-semibold">
        The day of our celebration
      </div>

      <div class="text-left">
        <p class="mb-10">
          Hi) We want to invite you to our wedding. For us, this is a very important day that we have been working towards for several years. So we will be happy to spend the day and evening of celebrating our reunion with you.
        </p>

        <p class="mb-10">
          We met in 2019 when we joined the Kyiv Campus team. We were friends for 2 years and started dating in 2021. And then - the war, which started a long-distance relationship.
        </p>

        <p class="mb-10">
          It's strange to think about it, but we spent more than two years apart. Polina came from Canada at the end of the semester for a few weeks and then left again. During her last visit, Roma couldn't take it anymore and proposed to her to stay with him forever. Polina said “Yes” - and left for another year... But soon she will return, and we will be together for a long time.
        </p>

        <div class="border border-tw-primary shadow shadow-xl rounded-lg py-5 px-5 mb-10">
          <p class="mb-4 font-semibold text-center">
            Please confirm your attendance at the wedding by May 30
          </p>

          <div class="text-center">
            <VBtn
              href="https://docs.google.com/forms/d/1pHRBHJsEM89AfvoJ9zDVw7bFjfXb_aAAMEBg_TStoSE/edit?pli=1"
              color="primary"
              size="large"
              variant="flat"
            >
              Confirm attendance
            </VBtn>
          </div>
        </div>
      </div>

      <div class="text-center">
        <p class="mb-2">
          We would be happy if you wear clothes in the colors of our wedding:
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
