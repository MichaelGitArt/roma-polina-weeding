<script setup lang="ts">
import Logo from './Logo.vue'

const route = useRoute()
</script>

<template>
  <VAppBar
    density="compact"
    flat
    height="100"
    absolute
    class="app-layout-toolbar"
  >
    <VContainer class="flex items-center py-0">
      <VToolbarTitle>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </VToolbarTitle>

      <div class="text-lg font-bold flex items-center gap-2">
        <RouterLink
          to="/"
          :class="{
            'underline opacity-60': route.path === '/',
          }"
        >
          UA
        </RouterLink>

        |

        <RouterLink
          to="/en"
          :class="{
            'underline opacity-60': route.path === '/en',
          }"
        >
          EN
        </RouterLink>
      </div>

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
