import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActiveStates = defineStore('active', () => {
    
    let active = ref(false);
    let activeHamburger = ref(false)
    const navbarBurgerRef = ref(null)
    
    return { active, activeHamburger, navbarBurgerRef}
})
