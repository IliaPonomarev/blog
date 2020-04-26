<template>
  <div class="nav-btns">
    <button class="aside-btn"><i class="fa fa-bars"></i></button>
    <button class="search-btn" @click="showSearchForm">
      <i class="fa fa-search"></i>
    </button>
    <div class="search-form" :class="{ active: isSearchFormShown }">
      <input
        class="search-input"
        type="text"
        name="search"
        placeholder="Enter Your Search ..."
      />
      <button class="search-close" @click="hideSearchForm">
        <i class="fa fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSearchFormShown: false
  }),

  methods: {
    showSearchForm() {
      this.isSearchFormShown = true
    },
    hideSearchForm() {
      this.isSearchFormShown = false
    }
  }
}
</script>
