const parseData = (data: object): FormData => {
  let formData = new FormData();

  for (let key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const request = async (url: string, method: string = 'POST', data: any = false): Promise<any> => {
  const options = {
    method
  };

  data && (() => options['body'] = JSON.stringify(data))(); //* JSON
  // data && (() => options['body'] = parseData(data))() //* Form Data

  const response = await fetch(url, options);
  const responseData = await response.json();
  return responseData;
};

export const _post = (url: string, data: object) => request(url, 'POST', data);
export const _get = (url: string) => request(url, 'GET');

export default request;