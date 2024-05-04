<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <VAppBar
    density="compact"
    flat
    height="100"
    class="app-layout-toolbar"
  >
    <VContainer class="flex items-center py-0">
      <VToolbarTitle>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </VToolbarTitle>

      <!-- <div class="div">
        6 Липня 2024
      </div> -->

      <VBtn icon size="large">
        <MenuIcon />
      </VBtn>

      <!-- <VMenu>
        <template #activator="{ props }">
          <VBtn
            density="comfortable"
            icon
            v-bind="props"
          >
            <VIcon>
              mdi-menu
            </VIcon>
          </VBtn>
        </template>

        <VCard width="200">
          <VList>
            <VListItem to="/about">
              About
            </VListItem>
          </VList>
        </VCard>
      </VMenu> -->
    </VContainer>
  </VAppBar>
</template>

<style lang="scss" scoped>
.app-layout-toolbar {
  box-shadow: 0 2px 26px rgba(156, 176, 197, 0.3);
}
</style>
