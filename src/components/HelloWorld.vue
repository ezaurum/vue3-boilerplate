<script setup lang="ts"></script>

<template>
  <label for="locale">locale</label>
  <select v-model="$i18n.locale">
    <option>en</option>
    <option>ja</option>
    <option>ko</option>
  </select>
  <p>message: {{ $t("confirm") }}</p>
  <I18nT :tag="'button'" keypath="test" class="btn btn-primary">
    <template #confirm>Confirm</template>
    <template #cancel>Cancel</template>
    <button @click="$i18n.locale = 'en'">en</button>
    <button @click="$i18n.locale = 'ko'">ko</button>
    <button @click="$i18n.locale = 'zh-CN'">zh-CN</button>
  </I18nT>
</template>
<i18n lang="json">
{
  "ko": {
    "confirm": "확인 HH",
    "cancel": "취소"
  },
  "en": {
    "confirm": "Confirm",
    "cancel": "Cancel"
  },
  "zh-CN": {
    "confirm": "确认",
    "cancel": "取消"
  }
}
</i18n>
