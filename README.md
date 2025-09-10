# D-Revise (React + Vite) — GitHub Pages Ready

## Локально
```bash
npm i
npm run dev
```

## Сборка
```bash
npm run build
npm run preview
```

## Деплой на GitHub Pages (Actions)
- В `.github/workflows/deploy.yml` base-путь задаётся через `BASE_PATH`.
- Ничего менять не нужно, если оставить `BASE_PATH: /REPO_NAME/` и заменить `REPO_NAME` на фактическое имя репозитория.

После пуша в `main` сайт опубликуется по адресу `https://<username>.github.io/REPO_NAME/`.
