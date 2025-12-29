<template>
  <div class="page-root">
    <MyCard
      Title="Main   Card"
      :is-active="true"
      data-id=" 99 "
    >
      <template #header>
        <UserAvatar
          user-name="John"
          :SIZE=" 64 "
          rounded
        />
      </template>

      <ContentBlock
        :text=" message "
        align=" center"
      >
        <CustomInput
          v-model="formData.name"
          placeholder=" Enter   name "
        />
        <CustomInput
          v-model="formData.email"
          TYPE="email"
          PLACEHOLDER=" Email   address "
        />

        <StatusBadge
          :Visible="hasErrors"
          status=" error "
        />
      </ContentBlock>

      <ActionRow
        :Primary="true"
        justify="space-between"
      >
        <PrimaryButton
          :Disabled=" isLoading "
          @click="submitForm"
        >
          Submit
        </PrimaryButton>

        <secondary-button
          size=" small "
          @click="resetForm"
        >
          reset
        </secondary-button>
      </ActionRow>
    </MyCard>

    <mycard
      Title="Secondary card"
      :is-active="false"
    >
      <contentblock text=" Another    block ">
        <span class="text-muted"> Some   inline   text </span>
      </contentblock>
    </mycard>
  </div>
</template>

<script setup>
import {
  ref, reactive, computed, watch, onMounted,
} from 'vue';

import MyCard from './components/MyCard.vue';
import ContentBlock from './components/ContentBlock.vue';
import UserAvatar from './components/UserAvatar.vue';
import CustomInput from './components/CustomInput.vue';
import ActionRow from './components/ActionRow.vue';
import PrimaryButton from './components/PrimaryButton.vue';
import secondaryButton from './components/SecondaryButton.vue';
import StatusBadge from './components/StatusBadge.vue';

const props = defineProps({
  initialName: {
    type: String,
    default: '',
  },
  InitialEmail: {
    type: String,
    default: '',
  },
  ISADMIN: {
    type: Boolean,
    default: false,
  },
});

const formData = reactive({
  name: props.initialName,
  email: props.InitialEmail,
});

const isLoading = ref(false);
const errors = ref(null);

const hasErrors = computed(() => errors.value !== null);

const message = computed(() => `Hello   ${formData.name || 'Guest'}`);

function submitForm() {
  if (!formIsValid.value) {
    errors.value = 'Invalid   form';
    return;
  }

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    console.log('Submitted   form', formData);
  }, 1200);
}

function resetForm() {
  formData.name = '';
  formData.email = '';
  errors.value = null;
}

const formIsValid = computed(() => formData.name.length > 0 && formData.email.includes('@'));

watch(() => formData.email, (newVal, oldVal) => {
  if (newVal !== oldVal && errors.value) {
    errors.value = null;
  }
});

onMounted(() => {
  if (props.ISADMIN) {
    console.log('Admin    mode   enabled');
  }
});

</script>
