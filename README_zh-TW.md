<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS API Starter (DDD + Prisma + PostgreSQL)

基於 [Nest](https://github.com/nestjs/nest) 框架的 TypeScript 啟動專案，整合了領域驅動設計 (DDD)、Prisma ORM 與身份驗證機制。

## 事前準備 (Prerequisites)

- **Node.js**: v20 或以上版本
- **Docker**: 需安裝 Docker (macOS 用戶若無 Docker Desktop 可使用 Colima)
- **PostgreSQL Client**: 選用，若需圖形化介面查看資料庫 (如 TablePlus, Postico, Prisma Studio)

## 資料庫設定 (Database Setup)

本專案使用 Docker 容器運行的 PostgreSQL。

1. **啟動資料庫**
   ```bash
   # 如果在 macOS 使用 Colima
   colima start
   
   # 啟動 Postgres 容器
   docker-compose up -d
   ```

2. **執行資料庫遷移 (Migrations)**
   ```bash
   # 執行 Prisma 遷移以建立資料表
   npx prisma migrate dev
   ```

   *注意：如果遇到 Prisma 版本相關錯誤，請確保您正在使用 Node v20 (可執行 `nvm use 20`)。*

## 專案安裝 (Project Setup)

```bash
$ yarn install
```

## 編譯與執行 (Compile and Run)

```bash
# 開發模式 (Development)
$ yarn run start

# 監聽模式 (Watch mode - 推薦開發時使用)
$ yarn run start:dev

# 生產模式 (Production mode)
$ yarn run start:prod
```

## 執行測試 (Run Tests)

```bash
# 單元測試 (Unit tests)
$ yarn run test

# 端對端測試 (E2E tests)
$ yarn run test:e2e

# 測試覆蓋率 (Test coverage)
$ yarn run test:cov
```

## 部署 (Deployment)

當您準備好部署 NestJS 應用程式到生產環境時，請參考官方 [部署文件](https://docs.nestjs.com/deployment)。

---

## 相關資源 (Resources)

- [NestJS 官方文件](https://docs.nestjs.com)
- [Prisma 官方文件](https://www.prisma.io/docs)

## 支援 (Support)

Nest 是一個 MIT 授權的開源專案。

## 授權 (License)

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
