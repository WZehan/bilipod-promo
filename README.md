# BiliPod Promo

BiliPod 产品宣传页，依次展示主页、资料库、搜索、播单与播放界面。

## 本地预览

这是一个无构建步骤的静态站点，可直接使用任意静态文件服务器预览：

```bash
python3 -m http.server 4173
```

## 部署

Cloudflare Pages 使用 GitHub 仓库自动部署：

- 生产分支：`main`
- 构建命令：留空
- 输出目录：`/`

iOS 与 Android 测试版徽章目前保持空链接，待稳定构建发布后填充。
