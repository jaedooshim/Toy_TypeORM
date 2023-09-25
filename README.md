# 네스트 트레이닝

[목적]
<br>
-TypeORM을 통한 DB 연습

-Entity 설정과 Dto 파일 만들기

-user 로직 / userInfo 로직 => 등록 / 조회 / Id별 조회 연습하기

-main.module / 각 폴더의 module에서 import안에 라이브러리 추가

<br>

### 라이브러리 설치 목록

```bash
npm install @nestjs/config
npm install @nestjs/typeorm typeorm mysql2
npm install class-validator class-transformer
npm install typeorm-naming-strategies
```

<br>

### .prettierrc 설정

```bash
/* add options */
  "printWidth": 170,
  "tabWidth": 2,
```

<br>

### .eslintrc.js 설정

```bash
/* add rules */
'prettier/prettier': ['error', { printWidth: 170 }]
```
