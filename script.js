// ==UserScript==
// @name         Canonicalize images addresses
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://images1.bonhams.com/image*
// @match        https://dkstatics-public.digikala.com/*
// @match        https://www.christies.com/img/*
// @match        https://ipm.ssaa.ir/Storage*
// @match        https://m.media-amazon.com/images/*
// @match        https://images-eu.ssl-images-amazon.com/images/*
// @match        https://www.filimo.com/shot/wp-content/uploads/*
// @match        https://img.freepik.com/free-vector*
// @match        https://img.freepik.com/premium-vector*
// @match        https://img.freepik.com/free-photo*
// @match        https://img.freepik.com/premium-photo*
// @match        https://statics.basalam.com/public*
// @match        https://sabakhabar.ir/wp-content*
// @match        https://cdn.isna.ir/d*
// @match        http://arthibition.net/uploadCore*
// @match        https://media.mehrnews.com/d*
// @match        https://idc0-cdn0.khamenei.ir/ndata*
// @match        https://img9.irna.ir/d*
// @match        https://images.metmuseum.org/CRDImages*
// @match        https://techcrunch.com/wp-content*
// @match        https://lh1.googleusercontent.com/*
// @match        https://lh2.googleusercontent.com/*
// @match        https://lh3.googleusercontent.com/*
// @match        https://lh4.googleusercontent.com/*
// @match        https://lh5.googleusercontent.com/*
// @match        https://lh6.googleusercontent.com/*
// @match        https://lh7.googleusercontent.com/*
// @match        https://lh8.googleusercontent.com/*
// @match        https://lh9.googleusercontent.com/*
// @match        https://images.unsplash.com/*
// @include      /^https?://.*\/wp-content\/.*$/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const destination = (function (url) {
        switch (url.host) {
            case 'dkstatics-public.digikala.com':
            case 'www.christies.com':
            case 'ipm.ssaa.ir':
            case 'images.unsplash.com':
                return url.origin + url.pathname;
            case 'images1.bonhams.com':
                [...url.searchParams].filter(x => x[0] !== 'src').forEach(x => url.searchParams.delete(x[0]));
                return url.toString();
            case 'm.media-amazon.com':
                return url.origin + url.pathname.replace(/@.+\./, '@.');
            case 'images-eu.ssl-images-amazon.com':
                return url.origin + url.pathname.replace(/\._.+_\./, '.');
            case 'img.freepik.com':
                return url.origin + url.pathname + '?w=2000';
            case 'statics.basalam.com':
                return url.origin + url.pathname.replace(/_.+\.jpg/, '');
            case 'cdn.isna.ir':
            case 'media.mehrnews.com':
            case 'img9.irna.ir':
                return url.origin + url.pathname.replace(/\/[1-3]\/([^\/]+$)/, '/4/$1');
            case 'arthibition.net':
                return url.origin + url.pathname.replace(/\/intro\/|\/medium\//, '/');
            case 'idc0-cdn0.khamenei.ir':
                return url.origin + url.pathname.replace(/\/A\/|\/C\//, '/B/');
            case 'images.metmuseum.org':
                return url.origin + url.pathname.replace(/\/web-additional\//, '/original/');
            case 'lh1.googleusercontent.com':
            case 'lh2.googleusercontent.com':
            case 'lh3.googleusercontent.com':
            case 'lh4.googleusercontent.com':
            case 'lh5.googleusercontent.com':
            case 'lh6.googleusercontent.com':
            case 'lh7.googleusercontent.com':
            case 'lh8.googleusercontent.com':
            case 'lh9.googleusercontent.com':
                return url.origin + url.pathname.replace(/=.+/, '=s8000');
//---Wordpress---
            default:
                return url.pathname.includes('/wp-content/')
                     ? url.origin + url.pathname.replace(/-\d+x\d+\./, '.')
                     : url.toString();
        }
    }(new URL(location.href)));
    if (location.href !== destination) location.href = destination;
}());
