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
// @match        https://play-lh.googleusercontent.com/*
// @match        https://images.unsplash.com/*
// @match        https://thumbs.dreamstime.com/*
// @match        https://news.ut.ac.ir/images*
// @match        https://pentagram-production.imgix.net/*
// @match        https://imageio.forbes.com/*
// @match        https://cdn.dribbble.com/*
// @match        https://image.cnbcfm.com/*
// @match        https://digitalhub.fifa.com/*
// @match        https://www.fractal-design.com/*
// @match        https://media.newyorker.com/*
// @match        static.vecteezy.com/*
// @match        https://images.vestiairecollective.com/cdn-cgi*
// @match        https://s.cafebazaar.ir/images*
// @match        https://media.farsnews.ir/*
// @match        https://static.digiato.com/*
// @match        https://is1-ssl.mzstatic.com/image*
// @match        https://is2-ssl.mzstatic.com/image*
// @include      /^https?://.*\/wp-content\/.*$/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const destination = (function (url) {
        switch (url.host) {
            case 'images1.bonhams.com':
                [...url.searchParams].filter(x => x[0] !== 'src').forEach(x => url.searchParams.delete(x[0]));
                return url.toString();
            case 'm.media-amazon.com':
            case 'images-eu.ssl-images-amazon.com':
                return url.origin + url.pathname.replace(/(@+)[^@]+\.|\._.+_\./, '$1.');
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
            case 'thumbs.dreamstime.com':
                return url.origin + url.pathname.replace(/\/b\/|\/s\/|\/m\/|\/t\/|\/x\/|\/l\//, '/z/');
            case 'news.ut.ac.ir':
                return url.origin + url.pathname.replace(/\/gallery-thumb\//, '/gallery-big/');
            case 'www.fractal-design.com':
                return url.origin + url.pathname.replace(/-\d+x\d+\./, '.');
            case 'media.newyorker.com':
                return url.origin + url.pathname.replace(/\/master\/w_.+\/|\/\d+:\d+\/w_.+\//, '/');
            case 'static.vecteezy.com':
                return url.origin + url.pathname.replace(/\/large_2x\/|\/large\/|\/small_2x\/|\/small\/|\/non_2x\/|\/non\//, '/original/').replace(/\/thumbnails\//, '/previews/');
            case 'images.vestiairecollective.com':
                return url.origin + url.pathname.replace(/\/cdn-cgi\/image\/w=.+\/produit\//, '/produit/');
            case 's.cafebazaar.ir':
                return url.origin + url.pathname + ('?x-img=v1/format,type_png,lossless_true');
            case 'media.farsnews.ir':
                return url.origin + url.pathname.replace(/_PhotoX./, '_PhotoT.');
            case 'static.digiato.com':
                return url.origin + url.pathname.replace(/-\d+x\d+\.|\-scaled\./, '.');
            case 'is1-ssl.mzstatic.com':
            case 'is2-ssl.mzstatic.com':
                return url.origin + url.pathname.replace(/\/\d+x0w./, '/8000x0w.');
//---Trim everything after '?'---
            case 'dkstatics-public.digikala.com':
            case 'www.christies.com':
            case 'ipm.ssaa.ir':
            case 'images.unsplash.com':
            case 'pentagram-production.imgix.net':
            case 'imageio.forbes.com':
            case 'cdn.dribbble.com':
            case 'image.cnbcfm.com':
            case 'digitalhub.fifa.com':
                return url.origin + url.pathname;
//---Google---
            case 'lh1.googleusercontent.com':
            case 'lh2.googleusercontent.com':
            case 'lh3.googleusercontent.com':
            case 'lh4.googleusercontent.com':
            case 'lh5.googleusercontent.com':
            case 'lh6.googleusercontent.com':
            case 'lh7.googleusercontent.com':
            case 'lh8.googleusercontent.com':
            case 'lh9.googleusercontent.com':
            case 'play-lh.googleusercontent.com':
                return url.origin + url.pathname.replace(/=.+/, '=s8000');
//---Wordpress sites---
            default:
                return url.pathname.includes('/wp-content/')
                     ? url.origin + url.pathname.replace(/-\d+x\d+\.|\-scaled\./, '.')
                     : url.toString();
        }
    }(new URL(location.href)));
    if (location.href !== destination) location.href = destination;
}());
