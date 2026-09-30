# remove-ads-yandex-games

## Назначение

Скрипт автоматически убирает рекламные элементы в **Яндекс Играх**.

После установки он выполняет следующие действия:

* удаляет рекламный блок, отображаемый над игрой;
* убирает мешающий `style` у контейнера игры;
* автоматически нажимает кнопку закрытия полноэкранной рекламы;
* повторно проверяет страницу во время работы игры, поэтому обрабатывает рекламу, которая появляется динамически.

Скрипт работает только на страницах:

`https://yandex.ru/games/*`

Запускать его вручную после установки не требуется.

---

## Установка

Для работы скрипта необходимо установить расширение **Tampermonkey**.

### 1. Установить Tampermonkey

## Расширение доступно на:

* [Chrome](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)
* [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
* [Safari — iPhone/iPad/Mac](https://apps.apple.com/app/tampermonkey/id6738342400)
* [Safari Classic — macOS](https://apps.apple.com/app/tampermonkey-classic/id1482490089)
* [Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

### Дополнительные версии:

* [Chrome — Tampermonkey BETA](https://chromewebstore.google.com/detail/tampermonkey-beta/gcalenpjmijncebpfijmoaglllgpjagf)
* [Microsoft Edge — Tampermonkey BETA](https://microsoftedge.microsoft.com/addons/detail/fcmfnpggmnlmfebfghbfnillijihnkoh)
* [Firefox — Tampermonkey BETA](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey-beta/)
* [Chrome — Tampermonkey Legacy (MV2)](https://chromewebstore.google.com/detail/tampermonkey-legacy/lcmhijbkigalmkeommnijlpobloojgfn)

Установите расширение и разрешите его добавление в браузер.

После установки значок Tampermonkey появится в панели расширений браузера.

---

### 2. Создать скрипт

Откройте Tampermonkey и нажмите **Создать новый скрипт**

Откроется редактор.

Удалите весь текст и вставьте код из этого файла → https://github.com/BigKerambit/remove-ads-yandex-games/blob/main/script.user.js

После этого сохраните его нажав `Ctrl + S`

Скрипт должен появиться в списке установленных и быть включён.

---

### 3. Использование

После установки просто откройте: https://yandex.ru/games/

или любую страницу конкретной игры на Яндекс Играх.

Скрипт запустится автоматически.

При появлении рекламы он сам попытается удалить рекламный блок или нажать кнопку закрытия.

---

## Как работает скрипт

Скрипт не блокирует рекламу на уровне сетевых запросов. Он работает непосредственно со страницей Яндекс Игр и удаляет определённые рекламные элементы из интерфейса.

Поскольку сайт динамически изменяет содержимое страницы, скрипт постоянно отслеживает изменения и выполняет повторную проверку. Это позволяет автоматически обрабатывать рекламу, появляющуюся уже после загрузки страницы.

---

## Отключение

Для временного отключения:

1. Откройте Tampermonkey.
2. Найдите скрипт в списке.
3. Выключите переключатель рядом с ним.

Удалять скрипт для этого не требуется.

---

## Удаление

Для полного удаления откройте Tampermonkey, найдите данный скрипт и удалите его из списка установленных пользовательских скриптов.

Tampermonkey при этом можно оставить установленным.
