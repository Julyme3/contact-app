import { email, helpers, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { computed } from 'vue'
import type { IContact } from '@/types/contact'

// TODO добавить валидацию при редактировании контакта
const useValidationForm = (state: IContact) => {
  const onlyDigits = helpers.regex(/^[0-9]+$/)
  const rules = {
    name: { required },
    phone: {
      required,
      onlyDigits: helpers.withMessage('This field should contains only digits', onlyDigits)
    },
    email: { email, required }
  }

  const v$ = useVuelidate(rules, state)

  const isFormValid = computed(() => v$.value.$anyDirty && !v$.value.$invalid)

  return {
    v$,
    isFormValid
  }
}

export default useValidationForm
