import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useContactFormStore = create(
    persist(
        (set) => ({
            name: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            state: '',
            city: '',

            setName: (name) => set({ name }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setCompany: (company) => set({ company }),
            setPosition: (position) => set({ position }),
            setState: (state) => set({ state }),
            setCity: (city) => set({ city }),
        }),
        {
            name: 'contact-form-storage',
        }
    )
)