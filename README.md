# mybackend
### คำสั่ง
* npm audit fix --force
* node -v (check version (v24.11.1))
* npm i prisma @prisma/client
* npx prisma init
* npm i dotenv (prisma.config.ts เพิ่ม import"dotenv/config")
* npx prisma db pull / npm i mysql2
* npx prisma generate
* npm i @prisma/client@latest
* npm prisma -v
* npx prisma -v
* npm uninstall -g  @prisma/client (change prisma version)
* npm i @prisma/client@6.19

---
#### in prisma.config.ts เปลี่ยนเป็น prisma-client-js แล้ว //output
---
#### install express
* npm i express
* เพิ่มเนื้อหาใน /test1/route/index.js
* run node index.js
---
##### npm i short-unique-id
- const ShortUniqueId = require('short-unique-id');
- const uid = new ShortUniqueId({ length: 10 }); // Set the desired length of the ID
- console.log(uid.rnd()); // Generates a random unique ID