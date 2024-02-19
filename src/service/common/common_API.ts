const publish_article = '/user/publish_article';
import { AxiosResponse } from 'axios';
import { TKRequest } from '..';
export const publish = async <T>(formInfo: T) => {
  const res: AxiosResponse = (await TKRequest.post(
    publish_article,
    formInfo,
  )) as unknown as AxiosResponse;
  return res.data;
};
