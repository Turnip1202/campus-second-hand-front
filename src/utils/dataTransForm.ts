export const form_TransForm = (formData: any, fileList: any) => {
  // 对formData进行重写，并转换地址信息
  const formMap = new Map();
  Object.keys(formData).forEach((key) => {
    // 处理地址信息
    if (key === 'articleAddress') {
      const articleAddressList = transForm_Address(
        formData.articleAddress,
        formData.articleAddressDetail,
      );
      formMap.set('articleAddress', articleAddressList);
      return false;
    }
    // 已经重写了地址信息，把详细地址给过滤掉
    if (key === 'articleAddressDetail') return false;
    formMap.set(key, formData[key]);
  });
  if (fileList && fileList.length) {
    formMap.set('fileList', fileList);
  }
  return Object.fromEntries(formMap);
};

const transForm_Address = (data: any, detail: string) => {
  if (!data || !data.length) return null;
  const AddressList = new Map();
  // 省
  AddressList.set('province', data[0]);
  // 市
  AddressList.set('city', data[1]);
  // 县
  AddressList.set('county', data[2]);
  // 详细地址
  AddressList.set('detail', detail);
  return Object.fromEntries(AddressList);
};
