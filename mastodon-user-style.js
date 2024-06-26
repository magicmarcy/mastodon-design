// ==UserScript==
// @name        Mastodon User Style
// @author      @magicmarcy@ruhr.social
// @description Custom CSS for Mastodon
// @version     0.78
// @match       https://ruhr.social/*
// @match       https://mastodon.social/*
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle ( `
:root {
  --mas-border-color: rgb(239, 243, 244);
}

body {
  -webkit-text-size-adjust: 100%;
}

body.theme-mastodon-light {
  background: white;
}

.search__input {
  border-radius: 100px;
  border: 0;
}

::-webkit-input-placeholder {
  color: #9ca3af !important;
}

.status__content {
	font-weight: 400;
}

.status__content__text {
  font-size: 15px;
}

.detailed-status .status__content__text {
  font-size: 23px;
  line-height: 1.3;
}

.dismissable-banner {
  border: none;
}

@media screen and (min-width: 1175px) {
 .columns-area__panels__main {
    padding: 0 40px;
    max-width: 800px;
  }
}

body.theme-mastodon-light .column > .scrollable,
body.theme-mastodon-light .column .detailed-status__action-bar,
body.theme-mastodon-light .story {
  border-color: var(--mas-border-color);
}

.status {
  padding-left: 24px;
  padding-right: 24px;
}

.status > *:not(.status__info) {
  /* margin-left: 56px; */
}

.detailed-status > * {
  margin-left: 0px;
}

.column-back-button,
.column-header {
  backdrop-filter: blur(5px);
  border-top: 0;
  border-bottom: 0;
  border-radius: 0;
}

body.theme-mastodon-light .column-back-button,
body.theme-mastodon-light .column-header {
  background: rgba(255,255,255,0.8);
  border-color: var(--mas-border-color);
}

body.theme-default .column-back-button,
body.theme-default .column-header {
  background: rgba(49, 53, 67, 0.8);
  border-color: var(--mas-border-color);
}

.tabs-bar__wrapper {
  background: transparent;
  padding-top: 0px;
}

.notification__filter-bar,
body.theme-mastodon-light .account__section-headline {
  background: none;
  border-color: rgb(239, 243, 244);
}

.notification__filter-bar .active,
.account__section-headline .active {
  border-bottom: 2px solid #3a3bff;
}

.account__section-headline a.active:after,
.account__section-headline a.active:before,
.account__section-headline button.active:after,
.account__section-headline button.active:before,
.notification__filter-bar a.active:after,
.notification__filter-bar a.active:before,
.notification__filter-bar button.active:after,
.notification__filter-bar button.active:before {
    display: none;
}

.display-name__html {
  font-weight: bold;
}

body.theme-mastodon-light .display-name__account {
  color: #64748b;
  font-size: 14px
}

body.theme-mastodon-light .story:hover {
    background-color: #f1f5f9;
}

.scrollable .account-card {
  background: transparent;
  margin: 20px;
  padding: 0px;
  overflow: hidden;
  border-radius: 10px;
}

.scrollable {
  border: none !important;
}

body.theme-mastodon-light .scrollable .account-card {
  border: 1px solid var(--mas-border-color);
}

.scrollable .account-card .account-card__header {
  padding: 0;
}

.scrollable .account-card__bio:after {
  display: none;
}

.columns-area__panels {
  flex-direction: row-reverse;
}

body.theme-mastodon-light .audio-player,
body.theme-mastodon-light .compose-form .spoiler-input__input, .compose-form__autosuggest-wrapper,
body.theme-mastodon-light .compose-form__poll-wrapper select,
body.theme-mastodon-light .poll__option input[type=text],
body.theme-mastodon-light .report-dialog-modal__textarea,
body.theme-mastodon-light .search__input, .setting-text,
body.theme-mastodon-light .compose-form .compose-form__buttons-wrapper {
    border: 1px solid var(--mas-border-color);
}

.column-inline-form {
  border-color: var(--mas-border-color);
}

.status__line {
  display: none !important;
}

.compose-panel {
  width: 360px !important;
}

a .account__avatar {
  border-radius: 50%;
}

.account__header__image {
  height: 300px;
}
` );
