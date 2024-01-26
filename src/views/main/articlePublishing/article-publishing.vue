<script lang="ts" setup>
import { ref } from 'vue';

import { UploadFilled } from '@element-plus/icons-vue';

//价格
const price = ref(0);
</script>

<template>
  <div class="article-publishing">
    <h1>物品发布</h1>
    <el-form
      ref="ruleFormRef"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="物品名称" prop="articleName">
        <el-input
          type="text"
          maxlength="50"
          show-word-limit
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="物品描述" prop="articleDescription">
        <el-input
          type="textarea"
          maxlength="1000"
          show-word-limit
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="地址" prop="articleAddress">
        <el-cascader />
      </el-form-item>
      <el-form-item label="物品类别" prop="articleCategory">
        <el-cascader />
        <el-input-number v-model="price" :precision="2" :step="0.1" :max="10" />
      </el-form-item>
      <el-form-item label="上传图片" prop="articleImage">
        <el-upload
          class="upload-demo"
          drag
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
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
        <el-button type="primary">提交</el-button>
        <el-button>Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.article-publishing {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
