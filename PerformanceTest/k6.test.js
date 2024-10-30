import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('users', function () {
  return [
    { username: 'user1_ebac', password: 'psw!ebac@test' },
    { username: 'user2_ebac', password: 'psw!ebac@test' },
    { username: 'user3_ebac', password: 'psw!ebac@test' },
    { username: 'user4_ebac', password: 'psw!ebac@test' },
    { username: 'user5_ebac', password: 'psw!ebac@test' },
  ];
});

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m40s', target: 20 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];
  
  const url = 'http://lojaebac.ebaconline.art.br/wp-json';

  const res = http.get(url, {
    auth: {
      username: user.username,
      password: user.password,
    },
  });

  check(res, {
    'status code é 200': (r) => r.status === 200
  });

  sleep(1);
}
