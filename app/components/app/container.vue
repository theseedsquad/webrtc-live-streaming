<template>
  <div
    class="w-full mx-auto flex flex-col"
    :class="{
      'max-w-xs': size === 'xs',
      'max-w-sm': size === 'sm',
      'max-w-md': size === 'md',
      'max-w-lg': size === 'lg',
      'max-w-[65ch]': size === 'prose',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
  props: {
    size: {
      type: String,
      default: 'lg',
      validator(value) {
        return ['xs', 'sm', 'md', 'lg', 'prose'].includes(value)
      },
    },
  },
}
</script>
