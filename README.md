# CyberDrink 2077

一款带有赛博黑色电影气质的剧情生存游戏。玩家要在一场高压商务酒局里撑过 20 个回合，在 `身体`、`清醒`、`面子` 和 `资金` 四项资源之间做选择，尽可能活着、体面地走出包厢。

## Overview

这个项目当前是一个单人单场景的叙事选择游戏，核心体验围绕“职场酒局生存”展开：

- 固定主线场景：`晋升之夜：鸿门宴`
- 20 回合事件推进，分为 4 个阶段
- 多属性博弈：`HEALTH`、`SOBRIETY`、`FACE`、`WEALTH`
- 商店备战、道具使用、隐藏路线、失败结局和胜利称号
- 中英文双语 UI

和常见的 AI 壳项目不一样，这个版本的主事件流已经主要由本地剧情树驱动，核心可玩内容不依赖在线生成。

## Highlights

- 沉浸式叙事：每一轮都围绕座次、敬酒、鱼头酒、深水炸弹、利益交换等酒局节点展开。
- 策略层清晰：买道具只是准备动作，真正的取舍发生在每一轮选择里。
- 分支明确：普通路线、隐藏告密路线、失败结局、徽章系统和胜利称号共同组成重复游玩的动力。
- 氛围完整：UI 采用暗色、噪点、扫描线和大图背景，整体风格统一。

## Gameplay Loop

1. 进入开场剧情，确认初始设定。
2. 在商店购买恢复、社交或战术类道具。
3. 按回合处理事件卡，选择行动或临时使用道具。
4. 根据属性变化进入下一轮，直到失败或通关。
5. 在结算页查看结局文本、称号和徽章。

## Tech Stack

- React 19
- TypeScript
- Vite
- 自定义剧情树与本地状态管理

## Project Structure

```text
.
├── App.tsx                    # 游戏主流程与状态机
├── constants.ts              # 常量、商店道具、翻译、固定场景
├── storyData.ts              # 主剧情树
├── endingTitles.ts           # 胜利称号
├── victoryEndings.ts         # 胜利结局文本
├── failureEndings.ts         # 失败结局文本
├── itemEffects.ts            # 道具效果计算
├── itemContext.ts            # 道具可用场景规则
├── services/eventService.ts  # 本地事件查询服务
└── components/               # 事件面板、商店、属性条、日志等 UI 组件
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

当前版本无需配置 API key 或 `.env` 文件。

默认开发端口为 `3000`，启动后访问：

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy

### Cloudflare Pages

推荐配置：

- Build command: `npm run build`
- Output directory: `dist`

## Current Implementation Notes

- 当前只有一个固定场景，不是多章节内容平台。
- 事件推进完全基于 `storyData.ts` 中的本地剧情节点。
- 道具系统分为购买、持有效果、即时效果和事件内可用性判断几层逻辑。
- 结局系统分成失败结局、胜利结局、胜利称号和徽章奖励四部分。

## Possible Next Steps

- 把场景系统从“固定单场景”升级成可配置多剧本结构
- 加上测试和 lint 流程
- 为 GitHub README 增加真实游戏截图或 GIF

## License

暂未添加。若准备开源，建议补充 `MIT` 或与你目标一致的许可证。
