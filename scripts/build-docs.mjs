import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const imageSource = "/Users/lisa/Documents/教程/picture/教程图";
const imageTarget = path.join(root, "assets/images/tutorial");

const tutorials = [
  {
    title: "Clash for Android 使用教程",
    slug: "android/clash-for-android.md",
    platform: "Android",
    app: "Clash for Android",
    keywords: ["Clash for Android 教程", "Clash Android 订阅链接", "安卓 Clash 配置教程"],
    images: [1, 2, 2, 3, 4, 5, 6, 7, 8],
    steps: [
      ["软件图标", "确认手机桌面上的 Clash for Android 图标，避免打开到其他同名客户端。"],
      ["进入配置页", "打开 Clash for Android 后，点击首页的“配置/未选择”入口，准备导入订阅配置。"],
      ["添加配置", "进入配置列表后点击右上角的加号，新建一个配置来源。"],
      ["选择 URL 导入", "在导入方式里选择“URL/从 URL 导入”，用于添加机场或代理服务提供的订阅链接。"],
      ["填写订阅链接", "在 URL 输入框粘贴订阅链接；名称可以填写服务商或套餐备注，方便以后区分。填写后点击右上角保存。"],
      ["选中配置", "保存后回到配置列表，点选刚刚导入的配置，让圆点变为选中状态。"],
      ["启动代理", "返回首页，确认配置已激活，然后点击“已停止/点此启动”开启代理服务。"],
      ["测试节点延迟", "进入“代理/规则模式”，点击右上角闪电按钮测试延迟，优先选择有延迟数值的节点。"]
    ],
    tips: ["不建议长期使用“自动选择”节点，频繁跳 IP 可能影响账号登录环境。", "如果订阅无法更新，先回官网重新复制最新订阅链接。"]
  },
  {
    title: "Clash Meta for Android 使用教程",
    slug: "android/clash-meta-for-android.md",
    platform: "Android",
    app: "Clash Meta for Android",
    keywords: ["Clash Meta for Android 教程", "Clash Meta 安卓配置", "Clash Meta 订阅链接"],
    images: [9, 10, 10, 3, 4, 5, 11, 12, 8],
    steps: [
      ["软件图标", "确认打开的是 Clash Meta for Android。"],
      ["进入配置模块", "在首页点击“配置/未选择”，进入配置管理页面。"],
      ["点击加号", "点击右上角加号，准备添加新的远程订阅配置。"],
      ["选择 URL 导入", "在导入方式中选择“URL/从 URL 导入”。"],
      ["粘贴订阅", "将机场官网复制的订阅链接粘贴到 URL 栏，名称填写易识别的备注，然后保存。"],
      ["选中订阅", "在配置列表中选中新导入的订阅，使其成为当前活动配置。"],
      ["启动连接", "回到首页，确认配置已激活后点击启动按钮。"],
      ["测速选节点", "进入代理页，点击闪电图标测试延迟，选择有延迟反馈的节点使用。"]
    ],
    tips: ["Clash Meta 与 Clash for Android 的导入流程相近，但图标和界面略有不同。"]
  },
  {
    title: "V2rayNG 使用教程",
    slug: "android/v2rayng.md",
    platform: "Android",
    app: "V2rayNG",
    keywords: ["V2rayNG 教程", "V2rayNG 订阅设置", "安卓 V2rayNG 配置"],
    images: [13, 14, 15, 16, 17, 18, 20, 19],
    steps: [
      ["软件图标", "确认打开的是 V2rayNG 客户端。"],
      ["打开订阅分组", "在主界面进入订阅分组设置。"],
      ["新增分组", "点击右上角加号，新建一个订阅分组。"],
      ["填写地址", "在“可选地址/url”粘贴订阅链接，备注填写服务名或套餐名，点击勾号保存。"],
      ["更新订阅", "返回上一级页面，点击右上角刷新按钮，将远程订阅下载到手机。"],
      ["打开菜单", "回到节点列表，点击右上角三个点打开更多操作。"],
      ["测试真连接", "选择“测试全部配置真链接”，等待测速完成；测试后优先选择有延迟数值的节点，再开启连接。"]
    ],
    tips: ["如果订阅地址无法直接更新，可先确认手机网络是否能访问服务商官网。"]
  },
  {
    title: "Surfboard 使用教程",
    slug: "android/surfboard.md",
    platform: "Android",
    app: "Surfboard",
    keywords: ["Surfboard 教程", "Surfboard 订阅导入", "安卓 Surfboard 代理设置"],
    images: [21, 22, 23, 24, 25, 26],
    steps: [
      ["软件图标", "确认打开的是 Surfboard。"],
      ["进入配置", "在底部或首页进入配置页面，点击右下角加号。"],
      ["选择从 URL 导入", "在弹出的导入方式中选择“从 URL 导入”，粘贴订阅链接并保存，等待配置下载完成。"],
      ["确认导入结果", "看到配置已出现在列表中，说明订阅已经成功添加。"],
      ["启动并测速", "返回仪表盘开启连接，再测试节点延迟，选择可用节点使用。"]
    ],
    tips: ["Surfboard 更适合偏规则分流的使用场景，导入前确认订阅格式兼容。"]
  },
  {
    title: "sing-box 使用教程",
    slug: "android/sing-box.md",
    platform: "Android",
    app: "sing-box",
    keywords: ["sing-box 教程", "sing-box Android 配置", "sing-box 订阅链接"],
    images: [27, 28, 29, 30, 31, 32, 33, 34, 35],
    steps: [
      ["软件图标", "确认手机上打开的是 sing-box。"],
      ["打开 Profiles", "进入 Profiles 配置页，点击右下角添加按钮。"],
      ["选择手动创建", "在导入方式中选择 Create Manually。"],
      ["进入编辑页", "进入配置编辑页面后，准备填写远程订阅信息。"],
      ["切换 Remote", "将 Type 改为 Remote，在 URL 粘贴订阅链接，Name 填写便于识别的名称。"],
      ["确认配置下载", "保存后确认订阅配置已经出现在列表中。"],
      ["开启订阅", "点击右下角按钮启用当前配置。"],
      ["测试并选择节点", "进入 Groups，点击闪电按钮测试延迟，选择有延迟的节点。"]
    ],
    tips: ["sing-box 对订阅格式更敏感，遇到导入失败时优先确认服务商是否支持 sing-box 格式。"]
  },
  {
    title: "Hiddify for Android 使用教程",
    slug: "android/hiddify-for-android.md",
    platform: "Android",
    app: "Hiddify for Android",
    keywords: ["Hiddify Android 教程", "Hiddify 订阅链接", "安卓 Hiddify 配置"],
    images: [36, 37, 38, 39, 40, 41],
    steps: [
      ["软件图标", "确认打开的是 Hiddify。"],
      ["添加配置文件", "在首页点击添加新的配置文件，选择手动输入。"],
      ["填写订阅地址", "名称填写备注，网址粘贴订阅链接，点击右上角保存。"],
      ["确认保存成功", "看到配置文件保存成功提示后，点击连接。"],
      ["选择节点", "Hiddify 会自动测试延迟，选择有延迟反馈的节点使用。"]
    ],
    tips: ["首次导入后等待几秒，让客户端完成配置解析和延迟测试。"]
  },
  {
    title: "NekoBox for Android 使用教程",
    slug: "android/nekobox-for-android.md",
    platform: "Android",
    app: "NekoBox for Android",
    keywords: ["NekoBox Android 教程", "NekoBox 订阅设置", "安卓 NekoBox 配置"],
    images: [42, 43, 43, 44, 45, 46, 47, 48, 49, 49, 50, 51],
    steps: [
      ["软件图标", "确认打开的是 NekoBox for Android。"],
      ["打开侧边栏", "点击左上角三条横线，进入侧边菜单。"],
      ["进入分组", "在菜单里选择“分组”。"],
      ["新增分组", "进入分组页面后点击右上角添加按钮。"],
      ["查看分组编辑页", "进入新建分组界面，准备填写订阅信息。"],
      ["配置订阅分组", "将分组类型改为订阅，分组名填写备注，在订阅链接处粘贴官网复制的链接，点击右上角勾号保存。"],
      ["更新订阅", "返回上一级页面，点击更新，等待节点列表下载完成。"],
      ["回到节点列表", "回到首页后可以看到节点已出现，此时还需要测试真连接。"],
      ["打开更多菜单", "点击右上角三个点。"],
      ["选择连接测试", "在菜单中选择连接测试。"],
      ["执行 URL Test", "选择 URL Test，等待测速完成后使用有延迟的节点。"]
    ],
    tips: ["NekoBox 分组逻辑比较明显，订阅链接应放在“订阅设置”区域，不要填到普通备注栏。"]
  },
  {
    title: "FlClash for Android 使用教程",
    slug: "android/flclash-for-android.md",
    platform: "Android",
    app: "FlClash for Android",
    keywords: ["FlClash Android 教程", "FlClash 订阅导入", "安卓 FlClash 配置"],
    images: [52, 53, 54, 55, 56, 57, 58, 59],
    steps: [
      ["软件图标", "确认打开的是 FlClash。"],
      ["进入配置", "点击配置选项，再点击加号添加订阅。"],
      ["选择 URL", "在添加配置中选择“URL/通过 URL 获取配置文件”。"],
      ["提交订阅链接", "将官网复制的订阅链接粘贴到 URL 输入框，然后点击提交。"],
      ["确认下载成功", "看到配置已经出现在列表中，说明订阅已保存到手机。"],
      ["开启连接", "返回仪表盘，点击右下角按钮开启代理。"],
      ["测速选节点", "进入代理页，点击右下角测速按钮，选择有延迟的节点使用。"]
    ],
    tips: ["FlClash 的 Android 和 Windows 操作逻辑接近，但按钮位置会随屏幕尺寸变化。"]
  },
  {
    title: "Clash for Windows 使用教程",
    slug: "windows/clash-for-windows.md",
    platform: "Windows",
    app: "Clash for Windows",
    keywords: ["Clash for Windows 教程", "CFW 订阅链接", "Windows Clash 配置"],
    images: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
    steps: [
      ["软件图标", "确认桌面或开始菜单中的 Clash for Windows 图标。"],
      ["查看主界面", "打开软件后先确认主界面可以正常显示。"],
      ["开启 Clash Core", "在 General 页面开启 Clash Core，让开关变为绿色。"],
      ["确认 Core 状态", "确认 Clash Core 已经处于开启状态。"],
      ["开启 Service Mode", "点击 Service Mode 入口，准备安装服务模式。"],
      ["安装服务模式", "在弹窗中点击 Install，允许软件安装 Service Mode。"],
      ["确认 Service Mode", "看到 Service Mode 安装成功后继续下一步。"],
      ["进入 Profiles", "点击 Profiles 或配置入口，打开订阅导入页面。"],
      ["粘贴订阅链接", "把机场官网复制的订阅链接粘贴到输入框。"],
      ["下载订阅", "点击 Download，将订阅配置下载到电脑。"],
      ["确认下载成功", "看到配置文件出现在列表中，说明订阅导入成功。"],
      ["选择节点", "进入 Proxies，选择有延迟数值的节点；timeout 代表当前节点不可用。"],
      ["开启系统代理", "回到 General，打开系统代理相关开关后即可使用。"]
    ],
    tips: ["Clash for Windows 已长期停止维护，若新系统兼容性不好，可考虑 Clash Verge Rev、FlClash 或 Mihomo Party。"]
  },
  {
    title: "Clash Verge 使用教程",
    slug: "windows/clash-verge.md",
    platform: "Windows",
    app: "Clash Verge",
    keywords: ["Clash Verge 教程", "Clash Verge 订阅导入", "Windows Clash Verge 配置"],
    images: [73, 74, 75, 76, 77, 78, 79],
    steps: [
      ["软件图标", "确认打开的是 Clash Verge。"],
      ["查看主界面", "进入软件后确认界面加载正常。"],
      ["启用服务模式", "在设置中开启服务模式，保证系统代理能正常接管流量。"],
      ["导入订阅", "在配置页的订阅文件链接处粘贴订阅链接，点击导入，并将新配置设为活动文件。"],
      ["确认导入成功", "看到配置文件出现在列表中后，说明订阅已经保存。"],
      ["开启系统代理", "回到设置页面开启系统代理。"],
      ["选择节点", "进入代理页面，选择一个有延迟的节点使用。"]
    ],
    tips: ["旧版 Clash Verge 已归档，优先使用仍在维护的 Clash Verge Rev。"]
  },
  {
    title: "Clash Nyanpasu 使用教程",
    slug: "windows/clash-nyanpasu.md",
    platform: "Windows",
    app: "Clash Nyanpasu",
    keywords: ["Clash Nyanpasu 教程", "Nyanpasu 订阅导入", "Windows Mihomo 客户端"],
    images: [80, 81, 82, 83, 84, 85, 86],
    steps: [
      ["软件图标", "确认打开的是 Clash Nyanpasu。"],
      ["查看主界面", "进入软件后确认界面正常。"],
      ["打开服务模式", "进入设置，开启服务模式。"],
      ["导入订阅", "打开配置页面，在配置文件链接处粘贴订阅链接并点击导入。"],
      ["确认导入", "看到导入成功提示或新配置文件后继续。"],
      ["设为活动订阅", "点击刚导入的订阅，将其设置为活动配置。"],
      ["选择节点", "返回代理页面，选择有延迟的节点使用。"]
    ],
    tips: ["如果代理页没有延迟结果，先手动触发一次节点测速。"]
  },
  {
    title: "NekoBox for Windows 使用教程",
    slug: "windows/nekobox-for-windows.md",
    platform: "Windows",
    app: "NekoBox for Windows",
    keywords: ["NekoBox Windows 教程", "NekoRay 订阅设置", "Windows NekoBox 配置"],
    images: [87, 88, 89, 90, 91, 92, 93, 94],
    steps: [
      ["软件图标", "确认打开的是 NekoBox for Windows。"],
      ["查看主界面", "进入软件后确认节点列表区域正常。"],
      ["打开分组", "点击首选项，选择分组。"],
      ["新建分组", "在分组窗口点击新建分组。"],
      ["填写订阅", "类型选择订阅，名称填写备注，勾选手动调节列宽，在 URL 粘贴订阅链接。"],
      ["更新订阅", "保存后点击更新订阅。"],
      ["确认节点", "看到节点出现在列表中，说明订阅更新成功。"],
      ["测速并开启代理", "选择订阅分组，右键测试真连接延迟，选择可用节点并开启系统代理。"]
    ],
    tips: ["NekoBox/NekoRay 的菜单较多，订阅链接一定要填在分组 URL 中。"]
  },
  {
    title: "V2rayN 使用教程",
    slug: "windows/v2rayn.md",
    platform: "Windows",
    app: "V2rayN",
    keywords: ["V2rayN 教程", "V2rayN 订阅分组", "Windows V2rayN 配置"],
    images: [95, 96, 97, 98, 99, 100, 101, 102],
    steps: [
      ["软件图标", "确认打开的是 V2rayN。"],
      ["查看主界面", "进入软件后确认主窗口显示正常。"],
      ["打开订阅分组设置", "点击订阅分组，选择订阅分组设置。"],
      ["添加分组", "在订阅分组设置中点击添加。"],
      ["填写订阅地址", "别名填写备注，可选地址/url 粘贴订阅链接，点击确定保存。"],
      ["更新订阅", "选择更新当前订阅；如果订阅地址被网络阻断，再尝试通过代理更新。"],
      ["确认更新结果", "节点列表出现后说明订阅已下载。"],
      ["测试真连接", "Ctrl+A 全选节点，右键选择测试服务器真连接延迟，使用有延迟的节点。"]
    ],
    tips: ["V2rayN 的“真连接延迟”比普通 ping 更接近实际可用性。"]
  },
  {
    title: "Hiddify for Windows 使用教程",
    slug: "windows/hiddify-for-windows.md",
    platform: "Windows",
    app: "Hiddify for Windows",
    keywords: ["Hiddify Windows 教程", "Hiddify 订阅设置", "Windows Hiddify 配置"],
    images: [103, 104, 104, 105, 106, 107, 108],
    steps: [
      ["软件图标", "确认打开的是 Hiddify for Windows。"],
      ["查看主界面", "打开软件后点击“新的配置文件”。"],
      ["新建配置", "在主界面点击添加新的配置文件。"],
      ["选择手动输入", "在添加方式中选择手动输入。"],
      ["填写订阅链接", "在网址处粘贴订阅链接，名称填写备注，然后点击保存。"],
      ["确认保存", "看到配置保存成功后返回主界面。"],
      ["选择可用节点", "进入代理页，等待 Hiddify 自动测速，选择有延迟的节点。"]
    ],
    tips: ["Hiddify 自动化程度较高，适合不想手动维护太多规则的用户。"]
  },
  {
    title: "FlClash for Windows 使用教程",
    slug: "windows/flclash-for-windows.md",
    platform: "Windows",
    app: "FlClash for Windows",
    keywords: ["FlClash Windows 教程", "FlClash 订阅导入", "Windows FlClash 配置"],
    images: [109, 110, 111, 112, 113, 114, 115, 116],
    steps: [
      ["软件图标", "确认打开的是 FlClash for Windows。"],
      ["查看主界面", "进入软件后确认界面正常。"],
      ["进入配置", "点击配置页面，再点击右下角加号。"],
      ["选择 URL 导入", "在添加配置中选择 URL/通过 URL 获取配置文件。"],
      ["提交订阅", "在 URL 输入框粘贴订阅链接，点击提交。"],
      ["确认下载成功", "看到订阅配置出现在列表中。"],
      ["选择节点", "进入代理页面，选择有延迟的节点。"],
      ["开启系统代理", "返回仪表盘，点击右下角按钮开启连接。"]
    ],
    tips: ["FlClash 支持多平台，适合希望 Android 和 Windows 操作习惯接近的用户。"]
  },
  {
    title: "Mihomo Party for Windows 使用教程",
    slug: "windows/mihomo-party-for-windows.md",
    platform: "Windows",
    app: "Mihomo Party for Windows",
    keywords: ["Mihomo Party 教程", "mihomo-party 订阅导入", "Windows Mihomo 客户端"],
    images: [117, 118, 119, 120, 121, 122, 123],
    steps: [
      ["软件图标", "确认打开的是 Mihomo Party。"],
      ["查看主界面", "进入软件后确认订阅管理区域正常。"],
      ["导入订阅", "点击空白订阅，在订阅地址输入栏粘贴订阅链接，点击导入。"],
      ["确认导入", "看到订阅出现在列表中，说明配置已经添加。"],
      ["进入代理组", "点击代理组位置，查看节点和策略组。"],
      ["测速选节点", "展开节点信息，等待自动测速；如没有延迟，点击测速图标手动测试。"],
      ["开启系统代理", "点击开启系统代理，即可开始使用。"]
    ],
    tips: ["Mihomo Party 适合偏新内核的 Windows 代理客户端使用场景。"]
  }
];

const extraDocs = [
  {
    path: "docs/ios/shadowrocket.md",
    content: `# Shadowrocket 小火箭使用教程：iPhone iOS 订阅导入与连通性测试

适用关键词：Shadowrocket 教程、iOS 小火箭怎么用、Shadowrocket 订阅链接、iPhone 代理软件教程。

## 使用前准备

1. 确认已经从 App Store 安装正版 Shadowrocket。
2. 从你的服务商后台复制订阅链接。
3. 不要把 Apple ID、订阅链接或节点信息公开发给他人。

## 导入订阅

1. 打开 Shadowrocket。
2. 点击右上角加号。
3. 如果剪贴板里已有订阅链接，Shadowrocket 通常会自动填入 URL；没有自动填入时，手动粘贴到 URL 输入框。
4. 点击保存，等待配置出现在首页。
5. 回到首页，打开连接开关。

## 节点不可用时怎么处理

1. 点击连通性测试。
2. 将测试类型改为 connect。
3. 如果仍然不可用，点击连通性测试下方的刷新按钮，重新测试节点。
4. 优先选择测试成功、延迟稳定的节点。

> 当前素材中没有 Shadowrocket 操作截图，因此本页只保留文字教程，避免用错其他客户端截图。`
  },
  {
    path: "docs/ios/shadowrocket-account-safety.md",
    content: `# Shadowrocket 账号与下载安全提醒

适用关键词：Shadowrocket 共享账号、小火箭 Apple ID、Shadowrocket 下载注意事项、iOS 代理软件安全。

## 重要提醒

1. 中国区 App Store 通常无法直接下载正版 Shadowrocket，请确认应用名称和开发者信息，避免下载仿冒应用。
2. 不建议长期使用来路不明的共享 Apple ID。共享账号可能失效，也可能带来隐私、安全和售后风险。
3. 如确需切换 Apple ID 下载应用，只在 App Store 登录，不要登录 iCloud。
4. 不要开启共享账号的双重认证升级，也不要把个人资料同步到陌生账号。
5. 使用其他 Apple ID 更新已下载应用时，可能要求原下载账号验证；无法验证时通常需要卸载后重新下载。

## 共享小火箭账号地址

共享 Shadowrocket / 小火箭 Apple ID 查询地址：

https://ccbaohe.com/appleID/

使用共享账号时，只在 App Store 登录，不要登录 iCloud。账号可能随时失效，请以页面实时显示为准。

## 更稳妥的做法

优先使用自己的外区 Apple ID 购买或下载 Shadowrocket，并妥善保存购买记录。这样后续更新、换机和恢复购买会更稳定。`
  },
  {
    path: "docs/troubleshooting/invalid-subscription.md",
    content: `# 更新订阅时提示“无效的订阅”怎么办

适用关键词：无效的订阅、订阅链接失效、代理订阅更新失败、机场订阅无法更新。

## 常见原因

1. 服务商更换了订阅域名或订阅接口。
2. 复制订阅链接时漏复制了部分字符。
3. 本地网络暂时无法访问订阅地址。
4. 客户端缓存了旧配置。
5. 订阅套餐过期、流量用尽或账号状态异常。

## 排查步骤

1. 回到服务商官网后台，重新复制最新订阅链接。
2. 在客户端中删除旧订阅或旧分组，再重新导入。
3. 尝试切换网络后更新订阅，例如从 Wi-Fi 切到移动网络。
4. 如果客户端提供“通过代理更新订阅”，可以在已有可用节点时尝试该选项。
5. 仍失败时，联系服务商确认订阅域名、套餐状态和账号状态。

## 判断重点

“无效的订阅”不一定代表服务商跑路，也不一定代表账号被封。先重新复制订阅链接并确认套餐状态，通常能解决大部分问题。`
  }
];

const downloadDoc = `# 代理软件下载地址：Android、Windows、macOS、Linux 客户端汇总

适用关键词：代理软件下载、Clash 下载、V2rayN 下载、V2rayNG 下载、Hiddify 下载、FlClash 下载、Mihomo Party 下载。

> 下载代理客户端时，优先选择官方 GitHub 仓库或可信发布页。第三方搬运包可能被篡改，安装前请检查来源。

## Android

| 软件 | 下载地址 | 备注 |
| --- | --- | --- |
| NekoBox for Android | https://github.com/MatsuriDayo/NekoBoxForAndroid | Android 常用 sing-box / Xray 客户端 |
| Clash for Android | https://github.com/clashdownload/Clash_for_Android/releases/tag/2.5.12 | 原项目已停止维护，此链接为历史版本发布页 |
| V2rayNG | https://github.com/2dust/v2rayNG | Android 常用 V2Ray/Xray 客户端 |
| Clash Meta for Android | https://github.com/MetaCubeX/ClashMetaForAndroid | Mihomo/Clash Meta Android 客户端 |
| Surfboard | https://github.com/getsurfboard/surfboard | Android 规则代理客户端 |
| sing-box | https://github.com/SagerNet/sing-box | sing-box 官方项目 |
| FlClash | https://github.com/chen08209/FlClash | 多平台 Clash/Mihomo 客户端 |
| Hiddify | https://github.com/hiddify/hiddify-next | 多平台代理客户端 |

## Windows

| 软件 | 下载地址 | 备注 |
| --- | --- | --- |
| Clash for Windows | https://github.com/cfwtf/clash_for_windows/releases | 已停止维护，适合历史参考 |
| V2rayN | https://github.com/2dust/v2rayN | Windows 常用 V2Ray/Xray 客户端 |
| NekoBox / NekoRay | https://github.com/MatsuriDayo/nekoray | Windows 桌面代理客户端 |
| Clash N | https://github.com/2dust/clashN | Windows Clash/Mihomo 客户端 |
| Clash Nyanpasu | https://github.com/LibNyanpasu/clash-nyanpasu | Windows/Mac/Linux Mihomo 客户端 |
| Clash Verge Rev | https://github.com/clash-verge-rev/clash-verge-rev | Clash Verge 社区维护版本 |
| FlClash | https://github.com/chen08209/FlClash | 多平台客户端 |
| Hiddify | https://github.com/hiddify/hiddify-next | 多平台客户端 |
| Mihomo Party | https://github.com/pompurin404/mihomo-party | Mihomo 桌面客户端 |

## macOS

| 软件 | 下载地址 | 备注 |
| --- | --- | --- |
| ClashX | https://en.clashx.org/download/ | 历史客户端，注意来源安全 |
| Clash Verge Rev | https://github.com/clash-verge-rev/clash-verge-rev/releases | 推荐优先查看维护版本 |
| Hiddify | https://github.com/hiddify/hiddify-next | 多平台客户端 |
| FlClash | https://github.com/chen08209/FlClash | 多平台客户端 |
| Clash Nyanpasu | https://github.com/LibNyanpasu/clash-nyanpasu | Mihomo 客户端 |
| NekoRay macOS | https://github.com/abbasnaqdi/nekoray-macos | macOS 版本 |
| Mihomo Party | https://github.com/pompurin404/mihomo-party | Mihomo 桌面客户端 |

## Linux

| 软件 | 下载地址 | 备注 |
| --- | --- | --- |
| Clash Verge Rev | https://github.com/clash-verge-rev/clash-verge-rev | Linux 桌面客户端 |
| FlClash | https://github.com/chen08209/FlClash | 多平台客户端 |
| Hiddify | https://github.com/hiddify/hiddify-next | 多平台客户端 |
| Clash Nyanpasu | https://github.com/LibNyanpasu/clash-nyanpasu | Mihomo 客户端 |
| NekoRay | https://github.com/MatsuriDayo/nekoray | Linux 桌面客户端 |
| Mihomo Party | https://github.com/pompurin404/mihomo-party | Mihomo 桌面客户端 |
`;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content.trimStart() + "\n");
}

function imageLink(id, alt, platform) {
  const name = `${id}.png`;
  if (platform === "Android") {
    return `<img src="../../assets/images/tutorial/${name}" alt="${alt}" width="360">`;
  }
  return `![${alt}](../../assets/images/tutorial/${name})`;
}

function renderTutorial(tutorial) {
  const relPrefix = tutorial.slug.split("/").length === 2 ? "../.." : "..";
  const prefaceStepTitles = new Set(["软件图标", "查看主界面"]);
  const actionSteps = tutorial.steps.filter(([title]) => !prefaceStepTitles.has(title));
  const actionImages = tutorial.images.slice(2);
  const lines = [
    `# ${tutorial.title}：订阅链接导入、节点测速与系统代理设置`,
    "",
    `适用平台：${tutorial.platform}`,
    "",
    `适用关键词：${tutorial.keywords.join("、")}。`,
    "",
    `本教程用于帮助用户把服务商提供的订阅链接导入 ${tutorial.app}，完成节点测速，并选择可用节点。请在当地法律法规和服务条款允许的范围内使用网络代理工具。`,
    "",
    "## 教程导航",
    "",
    `- [返回首页](${relPrefix}/README.md)`,
    `- [查看软件下载地址](${relPrefix}/docs/proxy-client-downloads.md)`,
    `- [订阅无效排查](${relPrefix}/docs/troubleshooting/invalid-subscription.md)`,
    "",
    "## 软件截图",
    "",
    `### 软件图标`,
    "",
    `下图是 ${tutorial.app} 的软件图标，用于确认没有打开到其他同名或仿冒客户端。`,
    "",
    imageLink(tutorial.images[0], `${tutorial.app} 软件图标截图`, tutorial.platform),
    "",
    `### 主界面预览`,
    "",
    `下图是 ${tutorial.app} 的主界面或初始界面，后续步骤会从这里开始操作。`,
    "",
    imageLink(tutorial.images[1], `${tutorial.app} 主界面预览截图`, tutorial.platform),
    "",
    "## 操作步骤",
    ""
  ];

  for (const [index, step] of actionSteps.entries()) {
    const img = actionImages[index];
    lines.push(`### ${index + 1}. ${step[0]}`, "", step[1], "", imageLink(img, `${tutorial.app} ${step[0]}截图`, tutorial.platform), "");
  }

  if (actionImages.length > actionSteps.length) {
    lines.push("## 补充截图", "");
    for (const img of actionImages.slice(actionSteps.length)) {
      lines.push(imageLink(img, `${tutorial.app} 补充截图 ${img}`, tutorial.platform), "");
    }
  }

  if (tutorial.tips?.length) {
    lines.push("## 使用建议", "");
    for (const tip of tutorial.tips) lines.push(`- ${tip}`);
    lines.push("");
  }

  lines.push("## 截图对应关系", "");
  lines.push("本页截图按原始教程引用顺序整理，文件编号如下：");
  lines.push("");
  lines.push(`\`${tutorial.images.map((id) => `${id}.png`).join("`, `")}\``);
  lines.push("");
  return lines.join("\n").replaceAll("../../assets", `${relPrefix}/assets`);
}

function renderReadme() {
  const android = tutorials.filter((t) => t.platform === "Android");
  const windows = tutorials.filter((t) => t.platform === "Windows");
  const link = (t) => `- [${t.title}](docs/${t.slug})`;

  return `# 代理软件使用教程：Android、Windows、iOS 订阅配置与节点测速指南

本仓库整理常见代理客户端的中文图文教程，覆盖 Clash for Android、Clash Meta、V2rayNG、Surfboard、sing-box、Hiddify、NekoBox、FlClash、Clash for Windows、Clash Verge、Clash Nyanpasu、V2rayN、Mihomo Party、Shadowrocket 等客户端。

## 适合谁阅读

- 第一次使用代理客户端，不知道订阅链接应该填在哪里。
- 已经购买服务，但不会导入订阅、更新订阅或测试节点延迟。
- 需要按 Android、Windows、iOS 快速找到对应软件教程。
- 想排查“无效的订阅”“节点 timeout”“导入后没有节点”等常见问题。

## 核心关键词

代理软件教程、机场使用教程、订阅链接导入、节点测速、Clash 教程、V2rayN 教程、V2rayNG 教程、Hiddify 教程、NekoBox 教程、FlClash 教程、Mihomo Party 教程、Shadowrocket 教程、Android 代理软件、Windows 代理软件、iOS 小火箭教程。

## 快速入口

- [代理软件下载地址](docs/proxy-client-downloads.md)
- [更新订阅提示无效的订阅怎么办](docs/troubleshooting/invalid-subscription.md)
- [Shadowrocket 小火箭使用教程](docs/ios/shadowrocket.md)
- [Shadowrocket 账号与下载安全提醒](docs/ios/shadowrocket-account-safety.md)

## Android 代理软件教程

${android.map(link).join("\n")}

## Windows 代理软件教程

${windows.map(link).join("\n")}

## iOS 代理软件教程

- [Shadowrocket 小火箭使用教程](docs/ios/shadowrocket.md)
- [Shadowrocket 账号与下载安全提醒](docs/ios/shadowrocket-account-safety.md)

## 通用使用流程

1. 下载并安装对应平台的客户端。
2. 从服务商官网复制订阅链接。
3. 在客户端中选择 URL 导入、远程配置、订阅分组或手动输入。
4. 保存后更新订阅，确认节点列表出现。
5. 测试节点延迟或真连接延迟。
6. 选择可用节点，开启系统代理或连接开关。

## 重要提醒

请在当地法律法规和服务条款允许的范围内使用网络代理工具。不要公开分享自己的订阅链接、账号、节点信息或 Apple ID。遇到订阅失效时，优先回服务商官网重新复制最新订阅链接。
`;
}

function renderKeywords() {
  const rows = tutorials.map((t) => `| ${t.app} | ${t.platform} | ${t.keywords.join("、")} | docs/${t.slug} |`);
  return `# SEO / GEO 关键词规划

本文件用于 GitHub README、搜索引擎摘要和 AI 问答检索的关键词覆盖。

## 关键词表

| 软件 | 平台 | 关键词 | 对应页面 |
| --- | --- | --- | --- |
${rows.join("\n")}

## 长尾关键词

- Android 代理软件怎么导入订阅链接
- Windows 代理软件怎么测试节点延迟
- Clash for Android 从 URL 导入教程
- V2rayNG 订阅分组设置教程
- V2rayN 更新当前订阅教程
- Hiddify 手动输入订阅链接教程
- NekoBox 订阅分组 URL Test 教程
- FlClash 通过 URL 获取配置文件教程
- Mihomo Party 开启系统代理教程
- Shadowrocket 小火箭订阅链接怎么用
`;
}

function copyImages() {
  ensureDir(imageTarget);
  for (let i = 1; i <= 123; i++) {
    fs.copyFileSync(path.join(imageSource, `${i}.png`), path.join(imageTarget, `${i}.png`));
  }
}

function main() {
  copyImages();
  write(path.join(root, "README.md"), renderReadme());
  write(path.join(root, "KEYWORDS.md"), renderKeywords());
  write(path.join(root, "docs/proxy-client-downloads.md"), downloadDoc);
  for (const tutorial of tutorials) {
    write(path.join(root, "docs", tutorial.slug), renderTutorial(tutorial));
  }
  for (const doc of extraDocs) {
    write(path.join(root, doc.path), doc.content);
  }
  write(path.join(root, ".gitignore"), ".DS_Store\n");
  write(path.join(root, "LICENSE"), `CC BY 4.0

This repository contains tutorial text and screenshots. Unless otherwise noted, documentation is provided under the Creative Commons Attribution 4.0 International license.
`);
}

main();
