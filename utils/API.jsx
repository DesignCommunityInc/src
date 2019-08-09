import axios from 'axios';

export default axios.create({
  baseURL: 'http://10.0.4.129/api/',
  responseType: 'json',
  headers: {
    // 'X-Auth-Token': localStorage.getItem('X-Auth-Token'),
<<<<<<< HEAD
    'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBwLnV1ZC5zY2hvb2xcLyIsImlhdCI6MTU2NTE5NDMxNiwibmJmIjoxNTY1MjAxNTE2fQ.Tuqk83Otm-ElzDcnX9juN7akRIz2ff4YZInLnrOmoUw',
=======
    'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBwLnV1ZC5zY2hvb2xcLyIsImlhdCI6MTU2NTM2MDY2NiwibmJmIjoxNTY1MzY3ODY2fQ.Q0SYnorRKIEPx8DjxJW62rHwZISZedfyLC9wjkKfPwI',
>>>>>>> refs/remotes/origin/master
  },
});

export function logout() {
  const eraseCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  };
  localStorage.clear();
  eraseCookie('X-Auth-Token');
  window.location.replace('http://10.0.4.129/auth');
}

export function handleErrors(error) {
  if (!error.response) {
    console.log(error);
    return;
  }
  console.log(`😱 Axios request failed: ${error}`);
  console.log(error);
  switch (error.response.status) {
    case 401: {
      logout();
      break;
    }
    default: break;
  }
}
