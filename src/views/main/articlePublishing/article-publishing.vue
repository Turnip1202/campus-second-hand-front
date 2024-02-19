<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ElUpload as Upload } from 'element-plus';
import { UploadFilled } from '@element-plus/icons-vue';
import {
  country_options,
  addressProps,
  item_options,
  form_default,
  baseURL,
  file_download,
} from './config';
import { IFormData, IResponse } from './types';
import { publish } from '@/service/common';
import { form_TransForm } from '@/utils';
const formValue = reactive<IFormData>(form_default);
const fileUpload = ref<InstanceType<typeof Upload> | null>(null);
const fileList = ref<string[]>([]);

// 事件
const articlePublish = async () => {
  const formInfo = form_TransForm(formValue, fileList.value);
  const data = await publish(formInfo);
  ElNotification({
    title: 'Success',
    type: 'success',
    message: data.msg,
    offset: 100,
    duration: 2000,
  });
};
const fileSuccess = (res: IResponse) => {
  const fileUrl = file_download + res.data;
  fileList.value.push(fileUrl);
  console.log(res);
};
const resetHandler = () => {
  fileUpload.value?.submit();
  console.log('resetHandler');
};
const fileError = (err: any) => {
  console.log('fileError', err);
};
</script>

<template>
  <div class="article-publishing">
    <h1>物品发布</h1>

    <el-form
      ref="ruleFormRef"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
      :model="formValue"
    >
      <el-form-item label="物品名称" prop="articleName">
        <el-input
          type="text"
          maxlength="50"
          show-word-limit
          autocomplete="off"
          v-model="formValue.articleName"
        />
      </el-form-item>
      <el-form-item label="物品描述" prop="articleDescription">
        <el-input
          type="textarea"
          maxlength="1000"
          show-word-limit
          autocomplete="off"
          v-model="formValue.articleDescription"
        />
      </el-form-item>
      <el-form-item label="物品地址" prop="articleAddress">
        <el-cascader
          :options="country_options"
          separator="&"
          :props="addressProps"
          v-model="formValue.articleAddress"
        />
        <el-input
          type="text"
          maxlength="50"
          show-word-limit
          autocomplete="off"
          v-model="formValue.articleAddressDetail"
          style="width: 20vw"
        />
      </el-form-item>
      <el-form-item label="物品类别" prop="articleCategory">
        <el-select
          multiple
          filterable
          default-first-option
          :reserve-keyword="false"
          placeholder="Choose tags for your article"
          style="width: 240px"
          v-model="formValue.articleCategory"
        >
          <el-option
            v-for="item in item_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-input-number
          :precision="2"
          :step="0.1"
          :max="10"
          v-model.number="formValue.articlePrice"
        />
      </el-form-item>
      <el-form-item label="上传图片" prop="articleImage">
        <el-upload
          ref="fileUpload"
          class="upload-demo"
          method="POST"
          accept="image/*"
          drag
          :on-success="fileSuccess"
          :on-error="fileError"
          name="files"
          :auto-upload="false"
          :action="baseURL + '/upload'"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="articlePublish">提交</el-button>
        <el-button @click="resetHandler">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-form-item>
      <div class="image-list">
        <template v-for="(fileUrl, index) in fileList" :key="index">
          <el-image
            fit="cover"
            style="width: 200px; height: 200px"
            :src="fileUrl"
          >
            <template #placeholder>
              <div class="image-slot">
                Loading{{ index }}<span class="dot">...</span>
              </div>
            </template>
          </el-image>
        </template>
      </div>
    </el-form-item>
  </div>
</template>

<style scoped lang="scss">
.article-publishing {
  display: flex;
  flex-direction: column;
  align-items: center;
  .image-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
