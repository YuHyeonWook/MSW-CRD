import { http, HttpResponse } from "msw";

let usersData = [
  {
    id: 0,
    name: "lee",
    country: "ko",
    lang: "react",
  },
  {
    id: 1,
    name: "jay",
    country: "eu",
    lang: "vue",
  },
  {
    id: 2,
    name: "mark",
    country: "us",
    lang: "spring",
  },
];

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json(usersData);
  }),
  http.post("/api/users", async ({ request }) => {
    const requestBody = await request.json();

    // 새로운 사용자 객체 생성
    const newUser = {
      id: usersData.length, //  ID 할당 방식
      ...requestBody, // 요청 본문에서 받은 데이터임.
    };
    usersData.push(newUser); // 새 사용자 추가함.
    return HttpResponse.json(newUser, {
      status: 201,
    });
  }),
  http.delete("/api/users/:id", ({ params }) => {
    const id = parseInt(params.id, 10);
    usersData = usersData.filter((user) => user.id !== id); // ID가 일치하지 않는 사용자만 남김
    return HttpResponse.json(
      { message: `유저 ${id}번 삭제됨` },
      {
        status: 200, // 성공
      }
    );
  }),

  http.put("/api/users/:id", ({ params, request }) => {}),
];
