export default <Nuxt.Plugin>function({ $axios }) {
  // 统一处理 401
  // $axios.onError((error: any) => {
  //   const code = parseInt(error.response && error.response.status);
  //   if (code === 401 && window) {
  //     alert('登陆已过期,需要重新登陆');
  //     window.location.reload();
  //   }
  // });
};
