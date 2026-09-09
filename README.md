# BiliPod Promo

BiliPod 产品宣传页，依次展示主页、资料库、搜索、播单与播放界面，并提供支持中心与隐私说明。

线上地址：<https://bilipod.com>

- 支持中心：`/support/`
- 隐私说明：`/privacy/`

## 本地预览

这是一个无构建步骤的静态站点，可直接使用任意静态文件服务器预览：

```bash
python3 -m http.server 4173
```

## 部署

Cloudflare Pages 使用 GitHub 仓库自动部署：

- Pages 项目：`bilipod-promo`
- 生产分支：`main`
- 构建命令：留空
- 输出目录：`/`

iOS TestFlight 与 Google Play 封闭测试徽章已接入对应测试链接。
