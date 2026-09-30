// ==UserScript==
// @name         Яндекс Игры - убрать рекламный блок и закрывать рекламу
// @namespace    https://yandex.ru/games/
// @version      1.3
// @match        https://yandex.ru/games/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    const lastClick = new WeakMap();

    function updatePage() {
        const stack = document.querySelector('main.stack');

        if (stack) {
            const first = stack.firstElementChild;

            // Удаляем только нужный рекламный блок, а не любой первый элемент.
            if (first?.matches(
                '[class*="manager-critical-game-module__stickyContainerWithButton"]'
            )) {
                first.remove();
            }

            // Это был элемент с индексом 2 в исходном HTML.
            // Ищем его по игровому iframe, поскольку индексы уже могли сдвинуться.
            const gameWrapper = document.querySelector('#game-frame')?.parentElement;

            if (
                gameWrapper?.parentElement === stack &&
                gameWrapper.hasAttribute('style')
            ) {
                gameWrapper.removeAttribute('style');
            }
        }

        // Удаляем рекламный блок каталога.
        // Ищем div с классом формата:
        // feed-adv-block-renderer-critical-catalog-module*
        //
        // В HTML этот div находится внутри .adaptive-width,
        // поэтому удаляем именно его родительский контейнер.
        for (const element of document.querySelectorAll(
            'div[class*="feed-adv-block-renderer-critical-catalog-module"]'
        )) {
            const parent = element.closest('.adaptive-width');

            if (parent) {
                parent.remove();
            }
        }

        // Автоматически закрываем полноэкранную рекламу.
        for (const button of document.querySelectorAll(
            '.close-button_type_adv-fullscreen'
        )) {
            if (!button.getClientRects().length) continue;
            if (getComputedStyle(button).visibility === 'hidden') continue;

            const now = Date.now();

            if (now - (lastClick.get(button) || 0) < 1000) continue;

            lastClick.set(button, now);
            button.click();
        }
    }

    new MutationObserver(updatePage).observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
    });

    setInterval(updatePage, 100);
    updatePage();
})();
