# Ravnaq Group — Landing 2

Asaka markazidagi xonadonlar aksiyasi uchun mo'ljallangan rasmiy lending sahifa.

## Domen
- **URL:** [https://landing2.ravnaqgroup.uz/](https://landing2.ravnaqgroup.uz/)

## Texnologiyalar
- HTML5, CSS3, Vanilla JavaScript
- Meta Pixel (`2448977545632876`)
- Server-side GitHub Webhook CI/CD (Tezkor va xavfsiz avtomatik deploy)

## CI/CD Avtomatizatsiyasi
`main` tarmog'iga har qanday `git push` amalga oshirilganda:
1. GitHub serverga webhook yuboradi (`/api/webhook-deploy`).
2. Serverdagi `/opt/webhook-deploy/deploy_landing2.sh` skripti ishga tushadi.
3. Serverdagi `/var/www/landing2.ravnaqgroup.uz` papkasiga eng oxirgi kod yuklanadi (`git fetch` + `git reset --hard origin/main`).
4. Fayl huquqlari (`www-data:www-data`, 755/644) to'g'rilanadi.
5. Nginx qayta yuklanadi (`systemctl reload nginx`).
