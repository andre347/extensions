<p align="center">
  <img src="https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/Eudic-1664029439.png" height="128">
  <h1 align="center">Easydict</h1>
  <h4 align="center"> Easily look up words or translate text. </p>
<p align="center">🇨🇳 🇺🇸 🇯🇵 🇰🇷 🇫🇷 🇪🇸 🇵🇹 🇮🇹 🇷🇺 🇩🇪 🇸🇦 🇸🇪 🇳🇱 🇷🇴 🇹🇭 🇸🇰 🇭🇺 🇬🇷 🇩🇰 🇫🇮 🇵🇱 🇨🇿</p>
</p>

<p align="center">
<a title="Install Easy Dictionary Raycast Extension" href="https://www.raycast.com/isfeng/easydict#install">
    <img height="64" style="height: 64px" src="https://assets.raycast.com/isfeng/easydict/install_button@2x.png">
</a>
</p>

## What is Easydict? [【中文介绍】](https://github.com/tisfeng/Raycast-Easydict/blob/main/docs/README_ZH.md)

`Easydict` is an easy dictionary, for looking up words or translating text easily. Use it out of the box, automatically detect the input text language, and support [Linguee](https://www.linguee.com/) and [Youdao Dictionary](https://www.youdao.com/), **🍎 MacOS system translation**, [DeepL](https://www.deepl.com/translator), [Google](https://translate.google.com), [Bing](https://www.bing.com/translator), [Baidu](https://fanyi.baidu.com/), [Tencent](https://fanyi.qq.com/), [Volcano](https://translate.volcengine.com/translate), [Youdao](https://fanyi.youdao.com/), and [Caiyun](https://fanyi.caiyunapp.com/#/) translation.

![easydict-1-1664438822](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-1-1664438822-1664438852.png)

## Features

- [x] Out of the box, easy to look up words or translate text.
- [x] Automatically detect the input language and automatically query the preferred language.
- [x] Provide word-rich query information, including basic translation, pronunciation, the types of exams that include the word, multiple parts of speech and explanations, forms and tenses, web translations, and web phrases.
- [x] Support automatic query selected text, enabled by default.
- [x] Support to open the [Eudic Dictionary](https://apps.apple.com/us/app/eudic-%E6%AC%A7%E8%B7%AF%E8%AF%8D%E5%85%B8/id434350458?l=zh&mt=12) and quickly look up words, if installed on your Mac.
- [x] Support automatic playback of word pronunciation. Use `Cmd + S` to play the pronunciation of words manually.
- [x] Support Youdao Text to Speech(TTS).
- [x] Support to sort query results manually.
- [x] Support system proxy.
- [x] Support Linguee and Youdao Dictionary.
- [x] Support macOS system translation. (_Please see [How to use 🍎 macOS system translation in Easydict?](https://github.com/tisfeng/Raycast-Easydict/blob/main/docs/How-to-use-macOS%F0%9F%8D%8Esystem-translation-in-Easydict.md)_)
- [x] Support DeepL, Google, Bing, Baidu, Tencent, Volcano, Youdao, and Caiyun translation.
- [x] Support 23 languages.

Next:

- [ ] Desktop Electron App.
- [ ] Support to view query history.

**_If you like this extension, please give it a [Star](https://github.com/tisfeng/Raycast-Easydict) ⭐️, thanks!_**

---

### [Linguee Dictionary](https://www.linguee.com/)：English <--> Chinese

![easydict-2-1662904408](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-2-1662904408-20220911215421566-1662904461.png)

#### [float](https://www.linguee.com/english-chinese/search?query=float)

![image-20220822170315915](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/image-20220822170315915-1661158995.png)

### [Linguee 词典](https://www.linguee.com/)：English <--> French

![easydict-3](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-3-1660916319.png)

#### [good](https://www.linguee.com/english-french/search?query=good)

![image-20220822163332948](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/image-20220822163332948-1661157213.png)

### Show More Details（Shortcut `Cmd + M`）

![showMore-1664440735](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/showMore-1664440735.png)

![easydict-2-1664439977](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-2-1664439977.png)

### Translation

![easydict-4-1663604001](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-5-1663604001.png)

![easydict-5-1663604086](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-6-1663604086.png)

![easydict-6-1664440833](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/easydict-6-1664440833.png)

## Installation

[`Easydict`](<(https://www.raycast.com/isfeng/easydict)>) is an extension of Raycast, so you need to install [Raycast](https://www.raycast.com/) first.

> `Raycast` is a blazingly fast, totally extendable launcher. Similar to [Alfred](https://www.alfredapp.com/) but it's completely free!

### Install from Raycast Store

<a title="Install Easy Dictionary Raycast Extension" href="https://www.raycast.com/isfeng/easydict#install">
          <img height="64" style="height: 64px" src="https://assets.raycast.com/isfeng/easydict/install_button@2x.png">
</a>

### Manually Install

```bash
git clone https://github.com/tisfeng/Raycast-Easydict.git && cd Raycast-Easydict

npm install && npm run dev
```

---

## Advanced

Actually, it works well without you having to do any extra work. The next are advanced documents for those who want to use `Easydict` better or understand how the extension works.

![setting-1664441069](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/setting-1664441069.png)

### Supported Languages

Currently we support 23 languages: **Chinese-Simplified, Chinese-Traditional, English, Japanese, Korean, French, Spanish, Portuguese, Italian, German, Russian, Arabic, Swedish, Romanian, Thai, Slovak, Dutch, Hungarian, Greek, Danish, Finnish, Polish, Czech.**

#### Language Detection

Currently, we support 5 language detection APIs, including Baidu, Tencent, Volcano, Apple and Bing. Apple language detection is a macOS feature, but you need to install a shortcut to use it.

Considering user privacy, only Bing language detection is enabled by default (no App Key is required, and no user personal data is recorded!) Other language detection APIs are enabled only when the corresponding translation feature is enabled. Note, however, that in general, the more language detection APIs are enabled, the more accurate the text will be and the faster the response time will be.

Details of the languages supported by each language detection service are as follows:

| 语言                   | Bing | 🍎 Apple | Baidu | Volcano | Tencent |
| :--------------------- | :--: | :------: | :---: | :-----: | :-----: |
| Chinese (Simplified)   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Chinese（Traditional） |  ✅  |    ❌    |  ❌   |   ✅    |   ❌    |
| English                |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Japanese               |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Korean                 |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| French                 |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Spanish                |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Portuguese             |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Italian                |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| German                 |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Russian                |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Arabic                 |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Swedish                |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Romanian               |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Thai                   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |
| Slovak                 |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Dutch                  |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Hungarian              |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Greek                  |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Danish                 |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Finnish                |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Polish                 |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |
| Czech                  |  ✅  |    ✅    |  ✅   |   ✅    |   ❌    |

#### Dictionary

##### Youdao Dictionary

Support 5 langauges, (Chinese), English, French, Japanese, Korean.

##### Linguee Dictionary

Support 19 langauges, (Chinese, Japanese, Russian), English, French, Spanish, Portuguese, Italian, German, Swedish, Romanian, Slovak, Dutch, Hungarian, Greek, Danish, Finnish, Polish, Czech.

#### Translation

Currently, we support DeepL, Google, Bing, 🍎 Apple, Baidu, Tencent, Volcano, Youdao and Caiyun translation, total 9 translation services.

Google and DeepL translations will use the system proxy by default. (DeepL works without a proxy, but sometimes requests time out)

> Note ⚠️: Since the Chinese version of Google Translate is currently unavailable, you can only use the international version, so you need to use a proxy to use Google Translate.

Supported translation languages:

| language               | Youdao | DeepL | Google | Bing | 🍎 Apple | Baidu | Volcano | Tencent | Caiyun |
| :--------------------- | :----: | :---: | :----: | :--: | :------: | :---: | :-----: | :-----: | :----: |
| Chinese (Simplified)   |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ✅   |
| Chinese（Traditional） |   ✅   |  ⚠️   |   ✅   |  ✅  |    ⚠️    |  ✅   |   ✅    |   ✅    |   ⚠️   |
| English                |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ✅   |
| Japanese               |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ✅   |
| Korean                 |   ✅   |  ❌   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| French                 |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| Spanish                |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| Portuguese             |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| Italian                |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| German                 |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| Russian                |   ✅   |  ✅   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| Arabic                 |   ✅   |  ❌   |   ✅   |  ✅  |    ✅    |  ✅   |   ✅    |   ✅    |   ❌   |
| Swedish                |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Romanian               |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Thai                   |   ✅   |  ❌   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ✅    |   ❌   |
| Slovak                 |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Dutch                  |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Hungarian              |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Greek                  |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Danish                 |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Finnish                |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Polish                 |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |
| Czech                  |   ✅   |  ✅   |   ✅   |  ✅  |    ❌    |  ✅   |   ✅    |   ❌    |   ❌   |

> Note: ⚠️ means the translation of source language to Traditional Chinese is not supported, such as DeepL. If you enter Traditional Chinese for translation, it will be treated as Simplified Chinese.

### Preferred Languages

The default preferred languages are simplified Chinese and English. You can change them according to your preferences.

Preference language has two main functions:

<details><summary> First, it improves the accuracy of automatic detection of input text language. </summary>

<p>

Preference language will be given priority in order during automatic detection. This is because some words may represent multiple languages at the same time, and the automatic detection program cannot work as expected. In most cases, the automatic detection of input text is very useful, except for very few special cases. For example, the English word `heel` will be automatically recognized into Dutch by Youdao translation, and then the translation results are not what we expect. At this time, if your `Easydict` preferred language contains English, it will be recognized into English first and translated correctly.

</p>

</details>

<details><summary> Second, it is used to confirm your target translation language.  </summary>

<p>

For example, if you input a sentence arbitrarily, it will be translated into the first preferred language. If the automatically recognized language is the same as your first preferred language, it will be automatically translated into the second preferred language.

</p>

</details>

### Automatic Query Selected Text

<details><summary> Automatic query selected text of the frontmost application, this option is turned on by default. </summary>

<p>

In order to better match the automatic selected text feature, it is a good idea to set a hotkey for `Easydict`, such as `Cmd` + `E`, so that after selected the text, you can directly query words through the hotkey, which is very smooth and elegant.

</p>

</details>

### Automatic Play Query Word Pronunciation

<details><summary> Automatically play the word audio after querying the word, turned on by default. </summary>

<p>

Note that when this option is started, the voice will be played only when the query is judged to be `is_Word` and in English, e.g. `good`, `look for`, etc. For other queries, the voice can be played with the shortcut `Cmd + S`.

The content of playing voice: English words are pronounced by the online Youdao dictionary first, and other words are pronounced by the TTS service of Youdao translation. For long text playback, use the say command.

</p>

</details>

Use `Cmd + S` to play the pronunciation of words manually.

![beauty](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/beauty-1660917383.png)

### Select Target Language

<details><summary> Specify the target language. This option is turned off by default. </summary>

<p>

By default, the extension will automatically select the preferred language as the target translation language. However, sometimes if you want to manually specify a language as the target language, you can turn on this option in the preferences and then you can temporarily select another target language in the action panel.

</p>

</details>

### Sort Query Results Manually

<details> <summary> You can sort query results by your preference, default is Youao Dictionary, Linguee Dictionary, DeepL, Google, Bing, Apple, Baidu, Tencent, Volcano, Youdao, Caiyun. </summary>

<p>

Name case are insensitive, use comma to separate. Example: `youdao dictionary, linguee dictionary, deepl, google, bing, apple, baidu, tencent, volcano, youdao, caiyun`.
You can also specify a part of the sort, for example: `youdao dictionary, apple, tencent`，the actual sort is: `youdao dictionary, apple, tencent, linguee dictionary, deepl, google, bing, baidu, volcano, youdao, caiyun`.

> Note: This sort is the overall sort, if a translation service is not enabled, the sort will be automatically ignored.

</p>

</details>

### 🍎 Apple Translate

`Easydict` support MacOS system translate, for more information, please see [How to use macOS Apple System Translation in Easydict?](https://github.com/tisfeng/Raycast-Easydict/blob/main/docs/How-to-use-macOS%F0%9F%8D%8Esystem-translation-in-Easydict.md)

### System Proxy

When this feature is turned on, `Easydict` will try to get the Mac system agent, and if successful, all subsequent network requests will be sent through the system agent. It is disabled by default. This feature is intended to counter IP blocking (some services such as Linguee have frequency restrictions on IPs), **but it can slow down the response time to requests, so please enable it only when needed. **

> Note ⚠️: Please don't turn on `Use System Proxy` while using the developer tools with MitM, otherwise some service requests will report certificate errors, for example: https://github.com/tisfeng/Raycast-Easydict/issues/18 .

### Translation Services

For easy to use, we provide some built-in translation APIs appid and appkey, but these Services have request frequency limits. If many people use them at the same time, it is likely to slow down or even stop. Therefore, for a better use experience, you'd better apply for a dedicated appid and appkey, and then replace the built-in services on the Preferences page.

Don't worry, these translation services have free quotas. Generally speaking, personal use is enough.

The following application tutorial is from [`Bob`](https://bobtranslate.com/guide/advance/service.html). Follow the tutorial and you should be able to complete the application soon.

- [Youdao Translate](https://bobtranslate.com/service/translate/youdao.html)： Select `text translation` and `speech synthesis`. (You will receive ¥50 experience fund)
- [Baidu Translate](https://bobtranslate.com/service/translate/baidu.html)

- [Tencent Translate](https://bobtranslate.com/service/translate/tencent.html)

- [Volcano Translate](https://bobtranslate.com/service/translate/volcengine.html)

- [Caiyun Translate](https://bobtranslate.com/service/translate/caiyun.html)

- [DeepL](https://www.deepl.com/translator)

![A2ECFJ-1664270926](https://raw.githubusercontent.com/tisfeng/ImageBed/main/uPic/A2ECFJ-1664270926.png)

## Friendly Recommendation

[`Bob`](https://bobtranslate.com/) is a MacOS **translation** and **OCR** application. Bob is probably the best translation application on the MacOS platform, and it's free!

> Update: Bob is now available on the Mac App Store, welcome to support: [Bob - 翻译和 OCR 工具](https://apps.apple.com/us/app/bob-%E7%BF%BB%E8%AF%91%E5%92%8C-ocr-%E5%B7%A5%E5%85%B7/id1630034110?l=zh&mt=12)

![image-20220620150946277](https://cdn.jsdelivr.net/gh/tisfeng/ImageBed@main/uPic/image-20220620150946277.png)

## Thanks

This project is inspired by [raycast-Parrot](https://github.com/Haojen/raycast-Parrot) and [Bob](https://github.com/ripperhe/Bob), and the first version is based on [raycast-Parrot](https://github.com/Haojen/raycast-Parrot). `Easydict` has improved many UI displays, added more practical features, deleted some complex or inappropriate operations, and made a lot of optimization && improvements on the original project.

Finally, all those interested in this project are welcome to contribute to the project, issues and PRs are fine. The project is still in the rapid development stage, any practical suggestions or interesting ideas are OK. There is no guarantee that they will be accepted, but they will be definitely considered. In addition, if submitting a PR, it is recommended to open a issue to briefly describe the content of the PR to avoid conflicts between PR and the features I am currently developing. Thank you.
